const mongoose = require('mongoose')

const expensessSchema = mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    expenses: Object
})
const expensesModel = mongoose.model('expense', expensessSchema)

module.exports = expensesModel