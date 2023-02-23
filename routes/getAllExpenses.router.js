const express = require('express')
const { getAllExpenses } = require('../contoler/getAllExpenses.contoler')
const router = express.Router()

router.get('/getAll', getAllExpenses)

module.exports = router