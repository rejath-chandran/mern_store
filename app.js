require('dotenv').config()
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT=process.env.PORT

const authroutes=require("./routes/auth")

app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())


//my route
app.use("/v1/api",authroutes)




async function run(){
 await mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true
  }, function () {  
    console.log('DB CONNECTED');
  })


 app.listen(PORT,()=>{console.log(`RUNNING ON http://localhost:${PORT}/`)})

}


run()
