// kaggleAdapter.js
// Convert Kaggle artifacts → binary.

import { encodeToBinary } from "./encoder.js";

export function kaggleToBinary({ dataset, notebook, model, metrics }) {
  const combined = JSON.stringify({
    dataset,
    notebook,
    model,
    metrics
  });

  return encodeToBinary(combined);
}
