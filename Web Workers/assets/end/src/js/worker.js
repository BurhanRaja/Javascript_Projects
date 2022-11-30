const computeTotal = (x) =>
  new Promise((resolve) => {
    let sum = 0;
    for (let n = 0; n <= x; n++) {
      sum += n;
    }

    resolve(sum);
  });

const eachNum = async function* (arr) {
  let n = 0;
  while (n < arr.length) {
    let result = await computeTotal(arr[n]);
    yield result;
    n++;
  }
};

// Start processing when data is received
self.addEventListener('message', async function (evt) {
  let startTime = Date.now();
  for await (let result of eachNum(evt.data)) {
    self.postMessage({
      type: 'data',
      message: {
        result,
        time: Date.now() - startTime,
      },
    });

    startTime = Date.now();
  }

  self.postMessage({ type: 'exit' });
});
