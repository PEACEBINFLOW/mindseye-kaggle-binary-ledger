// uploadInterface.js
// Post ledger entries to JSON, Google Sheets, SQL, etc.
// Placeholder interface.

export async function uploadResult(entry) {
  console.log("Uploading to remote store:", entry.eventId);
  return { status: "ok" };
}
