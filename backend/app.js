const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("hello from backend side");
// });

require("dotenv").config();
require("./conn/conn");

//create port
app.listen(process.env.PORT, () => {
  console.log(`server started at port${process.env.PORT}`);
});
