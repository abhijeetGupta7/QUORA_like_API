const express=require("express");
const statusCodes=require("http-status-codes");
const NotImplementedError = require("../../errors/not_Implemented_Error");
const UserService=require("../../services/User.Service");
const { UserRepository }=require("../../repositories/");

const UserActions=new UserService(new UserRepository());

async function getUser(req,res,next) {
    try {
        const UserDetails=await UserActions.getUser(req.params.id);
        return res.status(200).json({
            success:"true",
            error:{},
            message:`"Data of User with id ${req.params.id} is successfully fetched`,
            data:UserDetails
        });
    } catch (error) {
        next(error);
    }    
}


async function createUser(req,res,next) {
    try {
        const UserDetails=await UserActions.createUser(req.body);
        return res.status(201).json({
            "success":true,
            error:{},
            data:UserDetails
        });        
    } catch (error) {
        next(error);
    }
}


async function updateUser(req,res,next) {
    try {
        const UpdatedUserDetails=await UserActions.updateUser(req.params.id,req.body);
        return res.status(200).json({
            "success":true,
            "message":`User with id ${req.params.id} is successfully updated`,
            error:{},
            data:UpdatedUserDetails
        });
    } catch (error) {
        next(error);
    } 
}

module.exports={
    getUser,
    createUser,
    updateUser
};