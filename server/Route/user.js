const express = require("express");
const { UserModel } = require("../Model/user");
const userRoute = express.Router();
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")
// apis
userRoute.get("/", (req, res) => {
    res.status(200).send({ msg: "Welcome to the User Route" })
})
// signup
userRoute.post("/signup", async (req, res) => {
    const {name,email,password} = req.body;
    const myPlaintextPassword=password;
    const existuser = await UserModel.find({ email: email})
    try {
        if (existuser.length === 0) {
            bcrypt.hash(myPlaintextPassword, 6, async function(err, hash) {
                if(err){
                    res.status(400).send({msg:"Something is wrong."})
                }
                const user = new UserModel({email,password:hash,name});
                await user.save()
                res.status(200).send({ msg: "Signup is successful." })
            });
        }
        else {
            res.status(500).send({ msg: "User is already exist." })
        }
    }
    catch (e) {
        console.log("Error", e)
    }
})
// login
userRoute.post("/login", async (req, res) => {
    const {email,password}=req.body;
    let existuser = await UserModel.findOne({ email: email })
    try {
        if (existuser) {
            // compare your password.
            const hash=existuser.password;
            bcrypt.compare(password, hash, function(err, result) {
                if(err){
                    res.status(400).send({msg:"Something is wrong.."})
                }
                if(result){
                    let token = jwt.sign(email, 'secret_key');
                    res.status(200).send({token:token,msg:"Logged In"})
                }
                else{
                    res.status(404).send({msg:"Password is wrong.."})
                }
            });
        }
        else {
            res.status(400).send({ msg: "Wrong Crendential.." })
        }
    }
    catch (e) {
        console.log("Error", e)
    }
})


module.exports = { userRoute }