require('dotenv').config()
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const User=require("./models/user")
const cookieParser = require('cookie-parser')
const cors = require('cors')
const PORT=process.env.PORT



app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    
   return res.send('Hello World! ggggggg')
  })


app.post('/api/login',async (req, res) => {
    
    try {
      const u=await User.findOne({email:req.body.email})
      if(u.auth(req.body.password)){
        return res.status(200).json({
          name:u.firstname,
          email:u.email
        })
      }
      else{
        return res.status(400).json({error:"incorrect password"})
      }

    } catch (error) {
      return res.status(400).json({error:"no email found"})
    }
    

   
   
  })


app.post('/api/signin', (req, res) => {
    const u=new User(req.body)
    u.save()
    .then(()=>{return res.status(200).send(u)})
    .catch((err)=>{ return res.status(400).json({error:"not saved"})})
    
    
  })
async function run(){
 await mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true
  }, function () {  
    console.log('DB CONNECTED');
  })


 app.listen(PORT,()=>{console.log(`RUNNING ON PORT ${PORT}`)})

}
run()
