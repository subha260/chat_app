//core module
const bodyParser = require('body-parser');

//3rd party module

const express = require("express");
//const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require('cors')
const mongoose = require('mongoose');

//own routes import 
const users = require("./routes/api/user")
//constants
const app = express();
const port = process.env.PORT || 5000;
const mongodbURL = process.env.MONGOOSE_URL;


//middlewares
//CORS middleware
app.use(cors());
//body parser middleware to parser request bodies
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());
//api routes
 app.use("/api/users",users);

 //localhost:5000/api/users/


//start server
const server = app.listen(port,()=>{
    console.log("server is running on ",port);
})
const io = require('socket.io')(server);





//Assign socket object to every request (middleware0)
app.use(function (req,res ,next) {
    req.io = io;
    next();
}); 


//Database configuration
console.log(process.env.MONGOOSE_URI);
mongoose.connect(mongodbURL)
    .then(() => console.log("MongoDB Successfully Connected"))
    .catch(err => console.log(err));

