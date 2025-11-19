// timeLabeler.js
// LAW-T time blocks and segments for Kaggle runs.

export function createTimeLabels(timestamp = new Date().toISOString()) {
  const date = timestamp.slice(0, 10);
  const hour = timestamp.slice(11, 13);

  return {
    blockId: `daily_${date}`,
    segmentId: `${date}T${hour}`,
    timestamp
  };
}
