const { default: mongoose } = require("mongoose");
const { ATLAS_USER_DB_URL, NODE_ENV } = require("./server.config");

async function connectToUserDB(req,res,next) {
    try {
         if(NODE_ENV==='ACTIVE') {
            await mongoose.connect(ATLAS_USER_DB_URL);   
        }
    } 
    catch (error) {
        console.log("Unable to connect to DB");
        console.log(error);
        throw error;
    }
}

module.exports=connectToUserDB;

