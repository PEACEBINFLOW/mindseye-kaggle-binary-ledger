// encoder.js
// Convert code → binary (patternized representation)

export function encodeToBinary(codeString) {
  if (!codeString) return "";

  const bytes = Buffer.from(codeString, "utf8");
  let binary = "";

  for (const b of bytes) {
    binary += b.toString(2).padStart(8, "0");
  }

  return binary;
}
