const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { Schema, model } = require("mongoose");
const connection = require("./db");
app.use(cors())
let PORT  =8080
app.use(express.json())
const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password:String
})
const TaskSchema = new Schema({
    userid: String,
    time:String,
    description: String,
    Title: String
})
const Task=model('Task',TaskSchema)
const User = model("User", UserSchema);
app.post('/signup',async (req, res)=>{
    const user = new User(req.body)
    console.log(req.body)
    user.save();
    res.send(' user created successfully')
})
app.post('/login',async (req, res)=>{
    const user = User.findOne({ email: req.body})
    if(user){
        const token = jwt.sign({ id:user._id }, process.env.secret);
        res.send({token,id:user._id})

    }else{
        res.status(401).send('not found')
    }
})



// --------------------task model
app.get("/:userid/task", async(req, res) => {
    const data = await Task.find({userid:req.params.userid});
    res.send(data);
})
app.post('/:userid/task',async(req,res)=>{
    const userid=req.params.userid;
    const task={
        ...req.body,
        userid
    }
    const note=new Task(task);
    note.save((a,b)=>{
        if(a){
            console.log('err')
        }
        else{
            res.send(b);
        }
    })
})
app.patch('/:userid/task/:id',async(req,res)=>{
    const id=req.params.id;
    const userid=req.params.userid;
    const task={
        ...req.body,
        userid
    }
    const note=await Task.findOneAndUpdate({_id:id,userid},task);
    res.send(note);
})
app.delete('/:userid/task/:id',async(req,res)=>{
    const id=req.params.id;
    const userid=req.params.userid;
    const note=await Task.findOneAndDelete({_id:id,userid});
    res.send(note);
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