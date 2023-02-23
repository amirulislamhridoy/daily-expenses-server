const expensesModel = require("../Models/expenses.model")

const getAllExpenses = async ( req, res) => {
    try{
        const data = await expensesModel.find()
        res.json(data)
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {getAllExpenses}