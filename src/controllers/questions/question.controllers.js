const NotImplementedError = require("../../errors/not_Implemented_Error");

function postQuestion(req,res) {
    throw new NotImplementedError("Post Question",{});
}

function getQuestion(req,res) {
    console.log(req.query);
    throw new NotImplementedError("Get Question",{});
}

module.exports={
    postQuestion,
    getQuestion
}
