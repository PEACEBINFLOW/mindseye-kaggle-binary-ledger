// entryReader.js
// Query ledger by dataset, score, signature, block, segment.

import fs from "fs";
import path from "path";

const LEDGER_PATH = path.resolve("data/samples/sample-ledger.json");

export function queryLedger(filter = {}) {
  const all = JSON.parse(fs.readFileSync(LEDGER_PATH, "utf8"));

  return all.filter(entry => {
    return Object.entries(filter).every(([key, val]) => {
      return entry[key] === val;
    });
  });
}
