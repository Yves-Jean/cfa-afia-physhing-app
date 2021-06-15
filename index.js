const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const favicon = require("serve-favicon");
dotenv.config();
const cors = require("cors");
const app = express();
const port = process.env.port;

app.use(cors());

app.use(express.static("public"));

app.use(favicon(path.join(__dirname, "public", "AFIA_files", "favicon.ico")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3000, function () {
  console.log("CORS-enabled web server listening on port " + 3000);
});
