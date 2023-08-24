export const fetchSomeData = (data?: unknown) =>
  new Promise((resolve) => setTimeout(() => resolve(data ?? Date.now()), 1000));
