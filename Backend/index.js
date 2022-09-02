const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { Schema, model } = require("mongoose");
const connection = require("./db");

let PORT  =8080
app.use(express.json())
const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
})
const User = model("User", UserSchema);
app.post('/signup',async (req, res)=>{
    const user = new User(req, res)
    user.save();
    const token = jwt.sign({ email: user.email }, process.env.secret);
    res.send(token)
})
app.post('/login',async (req, res)=>{
    const user = User.findOne({ email: req.body})
    if(user){
        const token = jwt.sign({ id:user._id }, process.env.secret);
        res.send(token)

    }else{
        res.status(401).send('not found')
    }
})
app.listen(PORT,async ()=>{
    try{
        await connection;
        console.log('server is running on ',PORT)
    }
    catch{
        console.log('error')
    }
})