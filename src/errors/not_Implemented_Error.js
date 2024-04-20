const BaseError = require("./baseError");

class NotImplementedError extends BaseError {
    constructor(message,details) {
        super("Not Implemented Error",501,message,details);
    }
}

module.exports=NotImplementedError;
