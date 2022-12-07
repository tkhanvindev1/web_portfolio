const bodyParser = require("body-parser");
const db = require("./user");
const express = require("express");
const axios = require ('axios')
const cors = require('cors')


const PORT = 5050;

const server = express();
server.use(express.json());

server.use(
  cors({
    origin: "http://localhost:3000"
  })
)

server.use(bodyParser.json());
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

server.post("/user", db.newUser);

server.listen(PORT, () => {
  console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
