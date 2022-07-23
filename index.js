require('dotenv').config();
const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT=process.env.PORT;
// respond with "hello world" when a GET request is made to the homepage

const MOGOURI = process.env.MOGOURI;

mongoose.connect(MOGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("conneted to mongo yeahh")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})