const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username: {
        type: String,
        required:true
    },

    email: {
        type: String,
        required:true,
        unique:true
    },
    
    bio: {
        type:String
    }
});


const User=mongoose.model("UserModel",UserSchema);

module.exports=User;