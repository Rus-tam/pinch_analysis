const express = require('express');
const router = express.Router();
const mainWorker = require('../controllers/mainWorker');

/* GET home page. */
router.get('/', mainWorker.getIndex);

router.post('/add-data', mainWorker.postData);

router.get('/results', mainWorker.getResults);

module.exports = router;
