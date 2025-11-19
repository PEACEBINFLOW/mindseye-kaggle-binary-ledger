// decoder.js
// Convert binary → code (UTF-8 reconstruction)

export function decodeFromBinary(binaryString) {
  if (!binaryString) return "";

  const bytes = [];

  for (let i = 0; i < binaryString.length; i += 8) {
    const byte = binaryString.slice(i, i + 8);
    bytes.push(parseInt(byte, 2));
  }

  return Buffer.from(bytes).toString("utf8");
}
