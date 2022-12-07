const { Pool } = require("pg");
const pool = new Pool({
  user: "vinhnguyen",
  host: "db.bit.io",
  database: "vinhnguyen/portfolio-data",
  password: "v2_3w8Yb_UaM8JMBiSPUeMUXSjyphqRe",
  port: 5432,
  ssl: true,
});

const newUser = (req, res) => {
  console.log("endpoint hit!");
  console.log(req.body);
  const { name, email, message } = req.body;

  const userData = pool.query(`INSERT INTO users (name,email,message)
  VALUES ('${name}','${email}','${message}')
  RETURNING *`);
  res.status(201).send(userData.rows);
};

module.exports = {
  newUser,
};
