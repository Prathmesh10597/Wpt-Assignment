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
let id = 3;

con.query("select resourcename from resource where id=?", [id], (err, rows) => {
  if (err) {
    console.log(err);
  } else {
    if (rows.length > 0) {
      console.log(rows[0].resourcename);
    }
  }
});
