const express=require("express");
const app=express();
const cors =require('cors')
const bodyparser=require('body-parser');
const errorMiddleware=require("./middleware/error");
const path = require('path')
app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
//Route Imports
const pet=require("./routes/petRoute");
const user = require("./routes/userRoute");


app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use("/api/v1", pet);
app.use("/api/v1", user);

//Middleware for Error
app.use(errorMiddleware);

module.exports=app;