// diffEngine.js
// Compare binary deltas between two runs.

export function diffBinary(a, b) {
  const maxLen = Math.max(a.length, b.length);
  let diffCount = 0;

  for (let i = 0; i < maxLen; i++) {
    const bitA = a[i] || "0";
    const bitB = b[i] || "0";
    if (bitA !== bitB) diffCount++;
  }

  const ratio = diffCount / maxLen;

  return {
    diffCount,
    ratio: Number(ratio.toFixed(4))
  };
}
