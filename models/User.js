
//Create Schema for users
const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const UserSchema = new Schema(
    {
        name:{
            type:String,
            require:true,
        },
        username:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        date:{
            type:String,
            default: Date.now,
        },
    }
);

const Users = mongoose.model('users',UserSchema);
module.exports = Users;