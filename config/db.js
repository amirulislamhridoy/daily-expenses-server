const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.0exa02b.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('mongodb is connected'))
.catch(error => console.log(error.message))