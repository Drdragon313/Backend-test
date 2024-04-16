require("dotenv").config();
const express = require("express");
const app = express();

const employee_data = {
  employee: {
    name: "sonoo",
    salary: 56000,
    married: true,
  },
};
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/twitter", (req, res) => {
  res.send("Drdragon");
});
app.get("/empdata", (req, res) => {
  res.json(employee_data);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port `);
});
