export const fetchSomeData = (data?: unknown) =>
  new Promise((resolve) => setTimeout(() => resolve(data ?? Date.now()), 1000));

export const likeSomebody = () => new Promise(() => Promise.resolve(`done!`));
