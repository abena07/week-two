const express = require("express");
const users = express();
port = 5000;

users.get("/", (request, response) => {
  console.log("This is the request", request.body);
  response.send("this is the main backend");
});

users.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
