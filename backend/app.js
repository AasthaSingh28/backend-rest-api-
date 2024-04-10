import express from "express";
import mongoose from 'mongoose'
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";


const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://aasthasinghddun289:0zWk0QFrkoWuoyte@cluster0.6dx6ylk.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0').then(()=>app.listen(5000)).then(()=>console.log ("Connected to database and listening to localhost 5000")).catch((err)=>console.log(err));
//0zWk0QFrkoWuoyte