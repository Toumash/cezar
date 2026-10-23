(() => {
  const repository = document.querySelector('.repo-link');
  const count = document.querySelector('#github-stars');
  const cacheKey = 'cezar-github-stars-v1';
  function showStars(value,checkedAt) {
    if (!Number.isSafeInteger(value) || value < 0 || !Number.isFinite(checkedAt)) return false;
    const formatted = new Intl.NumberFormat('en-US').format(value);
    count.textContent = formatted;
    repository.setAttribute('aria-label',`Cezar on GitHub, ${formatted} stars`);
    repository.title = `${formatted} GitHub stars · checked ${new Date(checkedAt).toLocaleString('en-US')}`;
    return true;
  }
  async function refreshStars() {
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey)||'null');
      if (cached && showStars(cached.count,cached.checkedAt) && Date.now()-cached.checkedAt < 3600000) return;
    } catch {}
    try {
      const response = await fetch('https://api.github.com/repos/open-mercato/cezar',{credentials:'omit',signal:AbortSignal.timeout(5000)});
      if (!response.ok) return;
      const data = await response.json();
      const checkedAt = Date.now();
      if (data.full_name !== 'open-mercato/cezar' || !showStars(data.stargazers_count,checkedAt)) return;
      try { localStorage.setItem(cacheKey,JSON.stringify({count:data.stargazers_count,checkedAt})); } catch {}
    } catch {}
  }
  refreshStars();
})();
