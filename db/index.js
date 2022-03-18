const mysql = require("mysql2");

const connection = mysql.createConnection({
  database: "music",
  user: "root",
  password: "",
  host: "127.0.0.1",
});

connection.connect(function (err) {
  if (err) return console.log(err);
  console.log("Connected Successfully to Music DB");
});

module.exports = connection;
