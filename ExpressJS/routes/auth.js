const express = require("express");

const autController = require("../controllers/auth");

const router = express.Router();

router.get("/login", autController.getLogin);

router.post("/login", autController.postLogin);

router.post("/logout", autController.postLogout);

module.exports = router;
