const NA = (value) => value;

const DT = (datetime) => `${datetime}`.split("T")[0];

const MS = (milliseconds) => {
  const seconds = milliseconds / 1000;
  return `${(Math.round(seconds * 10) / 10).toFixed(1)}s`;
};

const TMS = (milliseconds) => {
  const seconds = milliseconds / 1000;
  return `≤${(Math.round(seconds * 10) / 10).toFixed(1)}s (${milliseconds}ms)`;
};

const KB = (bytes) => {
  const kilobytes = bytes / 1000;
  return `${Math.round(kilobytes)}kb`;
};

const LS = (cls) => {
  return `${cls.toFixed(3)}`;
};

export { DT, NA, MS, TMS, KB, LS };
