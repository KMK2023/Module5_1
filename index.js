//  Create a system with multiple web servers running on different ports.

// To import the express package
const express = require("express");

// To creaate a new app (we can create as many apps as required)
const app = express();
//Createa a new port (here using 3000)
const port = 3000;

// To creatae one more app and port
const app2 = express();
const port2 = 3001;

// To create one more app and port
const app3 = express();
const port3 = 3002;

// Check if the particular app is running on the port-
app.listen(port, () => {
  console.log(`To confirm that app is now listening on port ${port}`);
});
app2.listen(port2, () => {
  console.log(`Your app is now listening on port ${port2}`);
});
app3.listen(port3, () => {
  console.log(`Your app is now listening on port ${port3}`);
});
