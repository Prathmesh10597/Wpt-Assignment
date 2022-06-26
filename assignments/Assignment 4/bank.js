let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "sangar",
  port: 3306,
};
const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);

const express = require("express");
const app = express();

app.use(express.static("vs"));

app.get("/getbankdetail", (req, resp) => {
  console.log("Prathmesh");
  let input = req.query.x;
  let output = { status: false, bankdetails: { accountno: 0, balance: 0 } };

  con.query("select * from bank where accountno=?", [input], (err, rows) => {
    if (rows.length > 0) {
      output.status = true;
      output.bankdetails = rows[0];
    }
    resp.send(output);
  });
});

app.listen(9000, function () {
  console.log("server listening at port 900...");
});
