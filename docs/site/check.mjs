import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Script, createContext, runInContext } from 'node:vm';

const root = dirname(fileURLToPath(import.meta.url));
const read = name => readFileSync(resolve(root, name), 'utf8');
const html = read('index.html');
const scripts = [...html.matchAll(/<script src="([^"?]+)/g)].map(match => match[1]);
for (const file of scripts) new Script(read(file), { filename: file });

for (const file of ['index.html', ...readdirSync(root).filter(name => name.endsWith('.css'))]) {
  const source = read(file);
  const assets = file.endsWith('.html')
    ? [...source.matchAll(/(?:src|href)="([^"#?]+)(?:\?[^"#]*)?"/g)].map(match => match[1])
    : [...source.matchAll(/url\(["']?([^"')]+)["']?\)/g)].map(match => match[1]);
  for (const asset of assets.filter(value => !/^(?:https?:|data:)/.test(value))) {
    assert.ok(existsSync(resolve(root, asset)), `${file}: missing asset ${asset}`);
  }
}

const context = createContext({
  document: { addEventListener() {} },
  URL,
  window: { location: { href: 'https://docs.example.org/cezar/#guide/first-task' } },
});
for (const file of scripts.filter(name => !['app.js', 'github-header.js'].includes(name))) {
  runInContext(read(file), context, { filename: file });
}
const app = read('app.js');
runInContext(app.slice(0, app.indexOf("$('#planned-count')")), context);
const { features, guides, articles, images, referenceLinks } = runInContext(`({
  features: FEATURES,
  guides: HOW_TO_GUIDES,
  articles: TECH_ARTICLES,
  images: featureImages,
  referenceLinks: [
    ...HOW_TO_GUIDES.flatMap(guide => guide.next.map(item => item.href)),
    ...GUIDES.flatMap(guide => guide.ids.map(id => '#feature/' + id)),
    ...MAP_GROUPS.flatMap(group => group.ids.map(id => '#feature/' + id))
  ]
})`, context);
const featureIds = new Set(features.map(item => item.id));
assert.equal(featureIds.size, features.length, 'Duplicate feature IDs');
for (const item of features) {
  assert.ok(item.title && item.summary && item.source, `Incomplete feature: ${item.id}`);
  assert.ok(['available', 'opt-in', 'experimental', 'planned'].includes(item.status), `Invalid status: ${item.id}`);
  if (item.status === 'planned') assert.ok(item.spec || item.source.startsWith('.ai/specs/'), `Missing specification: ${item.id}`);
}
for (const [id, image] of Object.entries(images)) {
  assert.ok(featureIds.has(id), `Unknown screenshot feature: ${id}`);
  assert.ok(existsSync(resolve(root, 'images', image + '.png')), `Missing screenshot: ${image}`);
}
for (const link of referenceLinks) {
  const [kind, id, section] = link.slice(1).split('/');
  if (kind === 'feature') assert.ok(featureIds.has(id), `Unknown feature link: ${link}`);
  if (kind === 'guide') assert.ok(guides.some(item => item.id === id), `Unknown guide link: ${link}`);
  if (kind === 'technical' && id) {
    const article = articles.find(item => item.id === id);
    assert.ok(article, `Unknown technical link: ${link}`);
    if (section) assert.ok(article.sections.some(item => item.id === section), `Unknown section: ${link}`);
  }
}
const markdown = runInContext('guideMarkdown(HOW_TO_GUIDES[0])', context);
assert.ok(markdown.includes('https://docs.example.org/cezar/#'), 'Copied guide links must preserve the hosting subdirectory');
console.log(`Checked ${scripts.length} scripts, local assets, ${features.length} features, ${guides.length} guides, ${articles.length} technical articles, and guide-link portability.`);
