let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "test",
  port: 3306,
};

const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);
console.log("done");
let id = 5;
let resourcename = "novel";
let status = true;

con.query(
  "insert into resource values(?,?,?)",
  [id, resourcename, status],
  (err, res1) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res1.affectedRows);
    }
  }
);
console.log("all is well");
