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
let category = "C";

con.query(
  "select itemno,itemname ,price, category from item where category=?",
  [category],
  (err, rows) => {
    if (err) {
      console.log("error has occured");
    } else {
      if (rows.length > 0)
        console.log(
          rows[0].itemno +
            " " +
            rows[0].itemname +
            " " +
            rows[0].price +
            " " +
            rows[0].category
        );
      // rows is an array which contains one object per row.
      else console.log("no emp found with " + category);
    }
  }
);
console.log("all is well");
