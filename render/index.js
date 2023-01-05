const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login.ejs");
});
router.get("/mypage", (req, res) => {
  res.render("mypage.ejs");
});
router.get("/laundry_add", (req, res) => {
  res.render("laundry_add.ejs");
});
router.get("/my_info_edit", (req, res) => {
  res.render("my_info_edit.ejs");
});
router.get("/my_review", (req, res) => {
  res.render("my_review.ejs");
});
router.get("/register", (req, res) => {
  res.render("register.ejs");
});
router.get("/review_write", (req, res) => {
  res.render("review_write.ejs");
});
router.get("/shop_review", (req, res) => {
  res.render("shop_review.ejs");
});
router.get("/shop_wash_list", (req, res) => {
  res.render("shop_wash_list.ejs");
});
router.get("/shop_wash_status", (req, res) => {
  res.render("shop_wash_status.ejs");
});

module.exports = router;

module.exports = router;
