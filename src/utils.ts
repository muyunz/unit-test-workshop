export const promiseAll = (values: Array<Promise<unknown>>) => {
  return new Promise((resolve, reject) => {
    values.forEach((value, index) => {
      const results = [];
      value
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
