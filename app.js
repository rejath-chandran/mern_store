
const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const app=express()
const User=require("./models/user")



var DB_CONNECTION_STRING='mongodb://localhost:27017/ecom'

var jsonParser = bodyParser.json()

app.get('/', (req, res) => {
    
   return res.send('Hello World! ggggggg')
  })


app.post('/api/login',jsonParser,async (req, res) => {
    
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


app.post('/api/signin', jsonParser,(req, res) => {
    const u=new User(req.body)
    u.save()
    .then(()=>{return res.status(200).send(u)})
    .catch((err)=>{ return res.status(400).json({error:"not saved"})})
    
    
  })
async function run(){
 await mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true
  }, function () {  
    console.log(' connection open ');
  })


 await app.listen('4000')

}
run()
// TODO:make other schemas 