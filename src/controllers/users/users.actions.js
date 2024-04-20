const express=require("express");
const statusCodes=require("http-status-codes");
const NotImplementedError = require("../../errors/not_Implemented_Error");

function getUser(req,res,next) {
    try {
        throw new NotImplementedError("Get user is not implemented yet",{});    
    } catch (error) {
        next(error);
    }
     
}


function createUser(req,res,next) {
    try {
        throw new NotImplementedError("Create user is not implemented yet",{});    
    } catch (error) {
        next(error);
    }
}


function updateUser(req,res,next) {
    try {
        throw new NotImplementedError("Update user is not implemented yet",{});    
    } catch (error) {
        next(error);
    } 
}

module.exports={
    getUser,
    createUser,
    updateUser
};