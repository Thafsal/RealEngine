const mongoose  = require('mongoose')



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please prove a name"],
        unique:true,
        trim:true,
        minlength:[2,"Please provide a valid name"],
        maxlength:[15,"Please provide a valid name"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email",
          ]
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:[5,"Please provide atleast 5 charectors"],
        maxlength:[10,"Please provide maximum of 10 charectors"]
    },
    image:{
        type:String,
    },
    phone:{
        type:String
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User