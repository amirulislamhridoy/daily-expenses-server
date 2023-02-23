const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
require('./config/db')
const getAllExpenses = require('./routes/getAllExpenses.router')

app.use('/', getAllExpenses)

app.get('/', (req, res) => {
    //   res.send('Hello World!')
    res.sendFile(__dirname + "/./views/index.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})