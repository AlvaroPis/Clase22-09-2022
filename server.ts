import dotenv from "dotenv";
dotenv.config();

import express, { Express,Request,Response } from "express";
import mongoose from "mongoose";
import { json } from "stream/consumers";
import router from "./routes";

const app: Express = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use("/api",router);


app.listen(process.env.PORT, () => {
  console.log(`Server is up and running at port ${process.env.PORT}`);
});

app.get("/",(req,res)=>{
  res.send(users);
});

interface User{
  name:string;
  lastname:string;
}

let users: User[]=[];

app.post("/",(req:Request<any,any,User>,res)=>{
  users.push(req.body);
  //res.send(JSON.stringify({data:users}));
  //console.log(req.body);
  res.status(200).send(`El nombre del usuario es ${req.body.name} ${req.body.lastname}`); 
})

app.put("/User",(req,res)=>{
  res.send("usuario modificado con exito");
});

app.delete('/',(req,res) =>{
  const index = users.findIndex(users => users.name === req.body.name && users.lastname === req.body.lastname)
  if (index === -1) {
      res.status(404).send('No existe')
      return
  }
  users.splice(index, 1)
  res.send(users)

  //users.splice(users.indexOf({name:req.body.name, lastName:req.body.lastName},1))
  //res.status(200).send(`Se ha borrado con exito el usuario`)
})

connectToDb()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

async function connectToDb() {
  if (process.env.DB_CONNECTION_STRING) {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
  } else {
    console.log("Connection string is missing");
  }
}

//promesa nos permiten hacer que una funcion sea asincrona
// una variable que nos va a devolver un valor pero no sabemos cuando

//hacer un endpoint que cree un blog que cree un documento y nos agregue a la base de datos