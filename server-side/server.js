const app=require("./app");

const dotenv=require('dotenv');
dotenv.config({ path: "./config/config.env" });

//const { connect } = require("./routes/petRoute");
const connectDatabase=require("./config/database")

//Handling uncaught exception
process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
});

//Config
dotenv.config({path:"backend/config/config.env"})

//Connecting to database
connectDatabase()



const PORT=process.env.PORT;
const server=app.listen(PORT, () => {
    console.log('Listening on port:', + PORT);
});

//Unhandled Promise Rejection
process.on("unhandledRejection",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    });
});