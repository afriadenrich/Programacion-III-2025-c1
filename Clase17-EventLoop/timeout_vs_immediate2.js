// timeout_vs_immediate.js
const fs = require("node:fs");

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log("timeout");
  }, 0);
  setImmediate(() => {
    console.log("immediate");
  });
});

// timers
// pending callbacks
// idle
// poll
// check
// close
