console.log("arranca la app");
const arranque = Date.now();

setTimeout(() => {
  const delay = Date.now() - arranque;

  console.log("pasaron 5 segundos segun el método, o reales: ", delay);
  clearInterval(intervalo);
}, 5100);

const intervalo = setInterval(() => {
  const delay = Date.now() - arranque;
  console.log("pasó 1 segundo. pasaron del arranque: ", delay);
}, 1000);

// Ejemplo de la documentación de node https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

const fs = require("node:fs");

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile("/path/to/file", callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 200) {
    // do nothing
  }
});
