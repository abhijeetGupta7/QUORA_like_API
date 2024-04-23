const { INTERNAL_SERVER_ERROR } = require("http-status-codes");
const BaseError = require("../errors/baseError");

function errorHandler(err,req,res,next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success:"false",
            message:err.message,
            details:err.details,
            data:{}
        });
    }

    return res.status(INTERNAL_SERVER_ERROR).json({
        success:"false",
        message:"Something went wrong",
        details:err.details,
        data:{}
    });
}

module.exports=errorHandler;