const express = require("express");
const app = express();
const logger = require("morgan");
const port = 4000;

const router = require("./routes");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view 경로설정
app.set("views", __dirname + "/views");

// 화면 engine을 ejs로 설정
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/", express.static("assets"));
app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).render("index.html");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

module.exports = app;
