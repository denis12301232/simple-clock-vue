export default function useTimer(cb: (...args: any) => any, ms: number) {
  let rafSeconds = 0;
  const rafStart = Date.now();

  function tick() {
    const seconds = ((Date.now() - rafStart) / ms) | 0;
    if (rafSeconds !== seconds) {
      rafSeconds = seconds;
      cb();
    }
    requestAnimationFrame(tick);
  }

  return { tick };
}
