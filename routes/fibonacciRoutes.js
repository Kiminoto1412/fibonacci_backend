const express = require('express');

const router = express.Router();

const {nextFibonacci} = require("../controllers/fibonacciController");


router.get("/nextMove", nextFibonacci);

module.exports = router