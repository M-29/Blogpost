const ErrorHander = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const textkeys=require("../Textkeys/Messages")

//Register a User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    
  
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: textkeys.mesages.userRegistered})
        } else {
            const user = new User({
            name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( {message: textkeys.mesages.registerSuccess})
                }
            })
        }
    })
});

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const {name, email, password}=req.body
    User.findOne({ email: email}, (err, user) =>{
      if(user){
        if(password===user.password){

            res.send({message: textkeys.mesages.loginSuccess,user:user})
        } else {
            res.send({message: textkeys.mesages.invalidPassword})
        }
    } else {
        res.send({message: textkeys.mesages.notRegistered})
    }
    })
  });
  
