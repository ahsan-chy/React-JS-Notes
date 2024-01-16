const express = require("express");
const { usersData } = require("./data/usersData");
const cors = require("cors");

const server = express();

server.use(cors());
server.get("/users", (req, res) => {
  const { q } = req.query;

  const keys = ["first_name", "last_name", "email"];

  const search = (data) =>
    data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(q)));

  res.json(search(usersData).splice(0, 10));
});

server.listen(4000, () => {
  console.log("Server Started At 4000");
});
