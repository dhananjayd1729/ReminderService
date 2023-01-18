const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server-config");
// const { sendBasicEmail } = require("./services/email-service");
const app = express();

const TicketController = require("./controllers/ticket-controller");
const Jobs = require("./utils/job");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/api/v1/tickets", TicketController.create);

  app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`);

    Jobs();
    // sendBasicEmail(
    //   "support@admin.com",
    //   "flightbooking300@gmail.com",
    //   "Testing smtp protocol in reminder service",
    //   "Hey, whats up? I hope you are doing good"
    // );
  });
};

setupAndStartServer();
