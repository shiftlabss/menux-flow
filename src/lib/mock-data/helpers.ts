/** Generate a YYYY-MM-DD date string. */
export const d = (year: number, month: number, day: number) =>
  `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

/** Generate an ISO datetime string N days in the past from now. */
export const daysAgo = (n: number): string =>
  new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();

/** Generate an ISO datetime string N days in the future from now. */
export const daysFromNow = (n: number): string =>
  new Date(Date.now() + n * 24 * 60 * 60 * 1000).toISOString();
