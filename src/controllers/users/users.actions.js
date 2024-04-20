const express=require("express");
const statusCodes=require("http-status-codes");

function getUser(req,res) {
    return res.status(statusCodes.NOT_IMPLEMENTED).json({
        msg:"Get user Not implemented"
    }) 
}


function createUser(req,res) {
    return res.status(statusCodes.NOT_IMPLEMENTED).json({
        msg:" Create user Not implemented"
    }) 
}


function updateUser(req,res) {
    return res.status(statusCodes.NOT_IMPLEMENTED).json({
        msg:"Update user Not implemented"
    }) 
}

module.exports={
    getUser,
    createUser,
    updateUser
};