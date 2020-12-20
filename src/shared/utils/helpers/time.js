export const getTimeFromTimestamp = (ts) => {
  const h = Math.floor(ts / 3600);
  const m = Math.floor((ts - h * 3600) / 60);
  const s = ts - h * 3600 - m * 60;

  return [h, m, s];
};

export const formatTimeFromTimestamp = (ts) => {
  const [h, m, s] = getTimeFromTimestamp(ts);

  return [
    h.toString().padStart(2, "0"),
    m.toString().padStart(2, "0"),
    s.toString().padStart(2, "0"),
  ];
};

export const getTimestampFromTime = (hours, minutes, seconds) => {
  return hours * 3600 + minutes * 60 + seconds;
};
