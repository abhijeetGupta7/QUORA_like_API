const express=require("express");
const controllers=require("../../controllers")

const questionRouter=express.Router();

questionRouter.get("/",controllers.questionControllers.getQuestion);    // here query params will be used to filter the questions based on tags and topics

questionRouter.post("/",controllers.questionControllers.postQuestion);

module.exports=questionRouter;
