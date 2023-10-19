export const promiseAll = (values: Array<unknown>) => {
  return new Promise((resolve, reject) => {
    values.forEach((value, index) => {
      const results = [];
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          if (results.length === values.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};
