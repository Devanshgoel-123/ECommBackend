import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import bcrypt from "bcrypt";
import env from "dotenv";
env.config();
const app = express();
const port = process.env.PORT || 3000;
const saltRounds=5;


app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db = new pg.Client({
  user:process.env.user,
  host:process.env.host,
  database:process.env.database,
  password: process.env.DATABASE_PASSWORD,
  port:process.env.port,
});
db.connect();


app.get("/", async (req, res) => {
     const result=await db.query("SELECT * FROM items");
     const response=await db.query("SELECT * FROM users ")
     const users=response.rows;
     const items=result.rows;
    res.send("Hello");
    
});

app.post("/register", async(req,res)=>{
  const email=req.body["email"]
  const password=req.body['password']
  const phone=req.body["phone"]
  const name=req.body["name"]
  
  try{
    const response = await db.query("SELECT * FROM users WHERE email = ($1)", [email]);
    if(response.rows.length ===0){
      bcrypt.hash(password,saltRounds, async (err,hash)=>{
        if(err){
          console.log(err)
        }else{
          await db.query("INSERT INTO users(email,password,phone,username) VALUES ($1,$2,$3,$4)",[email,hash,phone,name]);
          res.send("Done the registration")
        }
        
      })
    }else{
      res.send("Email is already Used")
    }
  }catch(err){
       console.log(err);
       res.status(500).send("Internal Server Error");
  }  
})

app.post("/login",async  (req,res) =>{
  try {
    const userEmail = req.body["userEmail"];
    const loginPassword = req.body["userPassword"];

    const response = await db.query("SELECT * FROM users WHERE email = ($1)", [userEmail]);

    if (response.rows.length > 0) {
      const user = response.rows[0];
      const storedPassword=user.password;
      bcrypt.compare(loginPassword,storedPassword,(err,result)=>{
        if(err){
          console.log(err)
        }else{
          if(result){
            const userId = user.user_id;
            const userName = user.username;
            res.send({ userId, userName });
          }else{
            res.send("Invalid Credentials");
          }
        }
      })
    } else {
      res.send("User not found"); // Handle the case when the user is not found
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
})


app.post("/orders",async (req,res)=>{
  const email=req.body['email']
  const cardNumber=req.body['cardNumber']
  const expiry=req.body["expiry"]
  const cardHolderName=req.body["cardHolderName"]
  const cvv=req.body["cvv"]
  const address=req.body["address"]
  const value=req.body["orderValue"]
  const orderItems=req.body["bagItems"]
  try{
     const orderResult=await db.query("INSERT INTO orders (order_value) VALUES ($1) RETURNING order_id",[value]);
     const orderId=orderResult.rows[0].order_id;
      await orderItems.forEach((item) => {
      const product_id=item.id
      const quantity=item.quantity
      db.query("INSERT INTO order_details (order_id,product_id,quantity) VALUES ($1,$2,$3)",[orderId,product_id,quantity]);
    });
  }
  catch(err){
    console.log(err)
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
