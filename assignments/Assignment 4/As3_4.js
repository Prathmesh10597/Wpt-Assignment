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

let status = true;

con.query(
  "select resourcename from resource where status=?",
  [status],
  (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
          console.log(rows[i].resourcename);
        }
      }
    }
  }
);
