// modelFingerprint.js
// Generate a fingerprint based on score + metadata.

export function fingerprintModel(metrics) {
  const score = metrics.accuracy || 0;
  const hash = Buffer.from(JSON.stringify(metrics)).toString("hex").slice(0, 12);

  return `fp_${score.toFixed(4)}_${hash}`;
}
