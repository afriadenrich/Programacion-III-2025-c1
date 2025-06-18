function apiCall(arg, callback) {
  if (typeof arg !== "string")
    return process.nextTick(
      callback,
      new TypeError("argument should be string")
    );
}

apiCall(123, () => {
  console.log("callback ejecutada");
});

setImmediate(() => {
  console.log("inmediato");
});

const algo = () => {
  console.log("algo");
};

algo();
