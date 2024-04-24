const NotImplementedError = require("../../errors/not_Implemented_Error");
const statusCodes=require("http-status-codes");
const QuestionService = require("../../services/Question.service");
const QuestionRepository = require("../../repositories/question.repo");

const QuestionActions=new QuestionService(new QuestionRepository());

async function postQuestion(req,res,next) {    //   9J8a3j46oWWcM7Y8
    try {
        const newQuestion=await QuestionActions.postQuestion(req.body);
        return res.status(statusCodes.CREATED).json({
            success:"true",
            error:{},
            message:"Question is successfully created",
            details:newQuestion
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
    
}

async function getQuestion(req,res,next) {
    try {
        const questions=await QuestionActions.getQuestion(req.query);
        return res.status(statusCodes.OK).json({
            success:"true",
            error:{},
            message:"Successfully fetched the questions",
            details:questions
        });
    } catch(error) {
        console.log(error);
        next(error);
    }
}

module.exports={
    postQuestion,
    getQuestion
}
