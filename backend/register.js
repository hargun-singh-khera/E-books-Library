const mongoose = require('mongoose')
const userRegistrationSchema = new mongoose.Schema ({
    name:String,
    username:String,
    email:String,
    password:String
})
module.exports =  mongoose.model('users',userRegistrationSchema)