const { NOT_FOUND } = require("http-status-codes");
const BaseError = require("../baseError");

class QuestionNotFound extends BaseError {
    constructor(message,details) {
        super("Question Not Found",NOT_FOUND,message,details);
    }   
}

module.exports=QuestionNotFound;