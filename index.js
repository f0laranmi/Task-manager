require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");

const app = express()
const PORT = process.env.PORT || 4000
const taskRouter = require('./routes/taskRouter')

// middleware
app.use (express.json());

// routes
app.use('/api/tasks', taskRouter)
// db connection
const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'tasks'
        })
       app.listen(PORT, () => {
    console.log(`server running: ${PORT}`) ;
    })
    } catch (error) {
        console.log(error);
    }
}
connectDb()
// error route
app.use((req, res) => {
    res.status(404).json({success: false, msg: "reource not found"})
})
