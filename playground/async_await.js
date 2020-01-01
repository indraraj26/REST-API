const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non-negative');
      }
      resolve(a + b);
    }, 2000);
  });
};

const lol = async () => {
  const result = await add(2, 3);
  const result1 = await add(result, -10);
  const result2 = await add(result1, 20);
  return result2;
};

lol()
  .then(name => {
    console.log(name);
  })
  .catch(e => console.log(e));
