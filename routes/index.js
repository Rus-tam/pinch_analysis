const express = require("express");
const router = express.Router();
const mainWorker = require("../controllers/mainWorker");

/* GET home page. */
router.get("/", mainWorker.getIndex);

router.post("/", mainWorker.postData);

module.exports = router;
