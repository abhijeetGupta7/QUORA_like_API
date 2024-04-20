const express=require("express");

const controller=require("../../controllers");

const userRouter=express.Router();

userRouter.get("/:id",controller.userActions.getUser);
userRouter.post("/:id",controller.userActions.createUser);
userRouter.put("/:id",controller.userActions.updateUser);

module.exports=userRouter;