// entryWriter.js
// Append-only Kaggle run history.

import fs from "fs";
import path from "path";

const LEDGER_PATH = path.resolve("data/samples/sample-ledger.json");

export function writeEntry(entry) {
  const existing = JSON.parse(fs.readFileSync(LEDGER_PATH, "utf8"));
  existing.push(entry);

  fs.writeFileSync(LEDGER_PATH, JSON.stringify(existing, null, 2));
  return entry;
}
