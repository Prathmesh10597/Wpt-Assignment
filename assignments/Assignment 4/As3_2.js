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

con.query(
  "update resource set resourcename=?,status=? where id=?",
  ["prathmesh", false, 5],
  (err, res1) => {
    if (err) {
      console.log(err);
    } else {
      if (res1.affectedRows > 0) {
        console.log("updated");
      } else {
        console.log("not updated");
      }
    }
  }
);
