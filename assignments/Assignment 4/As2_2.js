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
let itemno = 5;
let itemname = "Eraser";

con.query(
  "update item set itemname=? where itemno=?",
  [itemname, itemno],
  (err, res1) => {
    if (err) {
      console.log("error has occured");
    } else {
      console.log(res1.affectedRows);
    }
  }
);
console.log("all is well");
