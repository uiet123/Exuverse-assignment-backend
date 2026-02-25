const express = require("express");
const dashboardRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const usersData = require("../data/userData");

dashboardRouter.get("/dashboard", userAuth, (req, res) => {
  try {
    res.json({
      message: "Dashboard data fetched",
      users: usersData
    });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
});

module.exports = dashboardRouter;