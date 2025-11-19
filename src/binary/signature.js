// signature.js
// Generate binary pattern signature from datasets/models/metrics.

import crypto from "crypto";

export function generateSignature(binaryString) {
  const hash = crypto
    .createHash("sha256")
    .update(binaryString)
    .digest("hex");

  // entropy estimate (very simple)
  const ones = (binaryString.match(/1/g) || []).length;
  const entropy = (ones / binaryString.length).toFixed(2);

  return {
    signature: `sig_${hash.slice(0, 6)}`,
    entropy,
    hash
  };
}
