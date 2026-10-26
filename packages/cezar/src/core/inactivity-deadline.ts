/**
 * The agent-step kill switch is an INACTIVITY bound, not a wall clock (cf2191f1): a step that
 * is still streaming frames is working, however long it takes, and only one that has gone
 * silent for `limitMs` is stuck. Every protocol frame a runner reads calls `touch()`.
 */
export interface InactivityDeadline {
  /** Record activity: restart the window. A no-op once expired or cleared. */
  touch(): void;
  clear(): void;
}

/** `limitMs <= 0` disables the bound (interactive sessions pass 0). */
export function armInactivityDeadline(limitMs: number, onExpire: () => void): InactivityDeadline {
  if (!(limitMs > 0)) return { touch() {}, clear() {} };
  let timer: NodeJS.Timeout | undefined = setTimeout(() => {
    timer = undefined;
    onExpire();
  }, limitMs);
  timer.unref?.();
  return {
    touch() {
      timer?.refresh();
    },
    clear() {
      if (timer) clearTimeout(timer);
      timer = undefined;
    },
  };
}

/** One wording for every backend; `timed out after Nm` keeps `failureKind` classifying it. */
export function inactivityTimeoutMessage(agent: string, limitMs: number): string {
  const span = limitMs < 60_000 ? `${Math.round(limitMs / 1000)}s` : `${Math.round((limitMs / 60_000) * 10) / 10}m`;
  return `${agent} timed out after ${span} without any output and was killed — Continue picks the task up again`;
}
