let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "sangar",
  port: 3306,
};
const mysql = require("mysql2"); //fate
const con = mysql.createConnection(dbparams);

const express = require("express");
const app = express();

app.use(express.static("vs"));

app.get("/getpincode", (req, resp) => {
  let input1 = req.query.x;
  console.log(input1);

  let output = {
    status: false,
    pincodedetails: { pincode: 00, area: "" },
  };

  con.query("select * from pin where pincode=?", [input1], (err, rows) => {
    if (err) {
      console.log(err);
    }
    if (rows.length > 0) {
      output.status = true;

      console.log(rows[0]);
    }
    resp.send(output);
  });
});

app.get("/addpin", (req, resp) => {
  let input = {
    pincode: req.query.x,
    area: req.query.y,
  };

  console.log(input);
  let output = true;

  con.query(
    "insert into pin(pincode,area)values(?,?)",
    [input.pincode, input.area],
    (err, rows) => {
      if (err) {
        console.log("error");
      } else if (rows.affectedRows > 0) {
        output = true;
      }
      resp.send(output);
    }
  );
});
app.listen(9000, function () {
  console.log("server listening at port 900...");
});
