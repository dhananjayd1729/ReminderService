const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
const { sendBasicEmail } = require("./services/email-service");
const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`);

    sendBasicEmail(
      "support@admin.com",
      "flightbooking300@gmail.com",
      "Testing smtp protocol in reminder service",
      "Hey, whats up? I hope you are doing good"
    );
  });
};

setupAndStartServer();
