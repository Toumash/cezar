import { afterEach, describe, expect, it, vi } from 'vitest';
import { failureKind } from '../runs/failure-kind.ts';
import { armInactivityDeadline, inactivityTimeoutMessage } from './inactivity-deadline.ts';

afterEach(() => {
  vi.useRealTimers();
});

describe('armInactivityDeadline (cf2191f1)', () => {
  it('fires only after a full window without activity', () => {
    vi.useFakeTimers();
    const onExpire = vi.fn();
    const deadline = armInactivityDeadline(1_000, onExpire);
    for (let i = 0; i < 10; i += 1) {
      vi.advanceTimersByTime(900);
      deadline.touch();
    }
    expect(onExpire).not.toHaveBeenCalled();
    vi.advanceTimersByTime(1_000);
    expect(onExpire).toHaveBeenCalledTimes(1);
  });

  it('is disabled by 0 and silenced by clear()', () => {
    vi.useFakeTimers();
    const off = vi.fn();
    armInactivityDeadline(0, off).touch();
    const cleared = vi.fn();
    const deadline = armInactivityDeadline(1_000, cleared);
    deadline.clear();
    deadline.touch();
    vi.advanceTimersByTime(10_000);
    expect(off).not.toHaveBeenCalled();
    expect(cleared).not.toHaveBeenCalled();
  });

  it('still classifies as a timeout', () => {
    expect(inactivityTimeoutMessage('claude CLI', 30 * 60_000)).toMatch(/^claude CLI timed out after 30m without any output/);
    expect(failureKind(inactivityTimeoutMessage('codex app-server', 30 * 60_000))).toBe('timeout');
  });
});
