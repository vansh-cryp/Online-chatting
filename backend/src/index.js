import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.routes.js"
import dotenv from "dotenv"
import {connetDB} from "./lib/db.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT;

//middleware to extract json data from body
app.use(express.json())
//cookie parser allows us to acees the cookies payload
app.use(cookieParser());
app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log("Server is listining on port "+ PORT);
    connetDB();
});