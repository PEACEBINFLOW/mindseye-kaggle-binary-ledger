// runAnalyzer.js
// Merge Kaggle metrics, binary signature, and diff.

import { generateSignature } from "../binary/signature.js";
import { diffBinary } from "../binary/diffEngine.js";

export function analyzeRun(previousBinary, currentBinary, metrics) {
  const signature = generateSignature(currentBinary);
  const diff = previousBinary ? diffBinary(previousBinary, currentBinary) : null;

  return {
    signature,
    diff,
    metrics
  };
}
