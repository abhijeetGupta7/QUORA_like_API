const BaseError = require("../baseError");

const statusCode=require("http-status-codes");

class UserNotFound extends BaseError {
    constructor(message,details) {
        super("User Not Found",statusCode.NOT_FOUND,message,details);
    }
}

module.exports=UserNotFound;
