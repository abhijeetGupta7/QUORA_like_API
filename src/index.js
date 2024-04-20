const express=require("express");
const { PORT }=require("./config/server.config");

const app=express();

app.get("/ping", (req,res) => {
    res.json({
        msg:"ping controller is up"
    })
})

app.listen(PORT,()=> {
    console.log(`Server is listening at PORT ${PORT}`);
})