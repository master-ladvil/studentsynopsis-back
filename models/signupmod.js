const mongoose = require("mongoose")

const signupmod = mongoose.Schema({
    name : {
        type: String,
        required: true,
        min : 4
    },
    year : {
        type: String,
        required : true
    },   
    section : {
        type : String,
        required : true
    },   
    regNo : {
        type:String,
        required : true
    },
    emailId:{
        type: String,
        required : true,
        max : 255,
        min:6
    },    
    phoneNo : {
        type : String,
        required : true
    },
    password : {
        type: String,
        required : true
    }
    

})

module.exports = mongoose.model("signupmodel", signupmod)