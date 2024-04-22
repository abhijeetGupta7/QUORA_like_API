const BaseError = require("../baseError");

class DuplicateUser extends BaseError {
    constructor(message,details) {
        super("Duplicate User Error",400,message,details);
    }
}

module.exports=DuplicateUser;