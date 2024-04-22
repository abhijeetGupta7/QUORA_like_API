const express=require("express");
const { PORT }=require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/Error_Handler");
const bodyParser = require("body-parser");
const connectToUserDB = require("./config/config.user");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/ping", (req,res) => {
    res.json({
        msg:"ping controller is up"
    })
})

app.use("/api",apiRouter);

app.use(errorHandler);

app.listen(PORT,async ()=> {
    console.log("Connecting to DB...");
    await connectToUserDB();
    console.log(`Server is listening at PORT ${PORT}`);
})


//USER DB PASS ALSlzfZ9YfRBFGTU