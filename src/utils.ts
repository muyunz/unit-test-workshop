export const promiseAll = (values: Array<unknown>) => {
  return new Promise((resolve, reject) => {
    const results: unknown[] = [];
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          if (results.length === values.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

export const afterDate = (date: Date) => {
  return new Date() > date;
};
