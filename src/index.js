const express=require("express");
const { PORT }=require("./config/server.config");
const apiRouter = require("./routes");

const app=express();

app.get("/ping", (req,res) => {
    res.json({
        msg:"ping controller is up"
    })
})

app.use("/api",apiRouter);

app.listen(PORT,()=> {
    console.log(`Server is listening at PORT ${PORT}`);
})