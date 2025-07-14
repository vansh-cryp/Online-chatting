import express from "express"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.routes.js"
import messageRoutes from "./routes/messageRoutes.routes.js"
import dotenv from "dotenv"
import cors from "cors"
import {connetDB} from "./lib/db.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors(
    {
        origin :"http://localhost:5173",
        credentials: true, // Allow cookies to be sent with requests

    }
));

//middleware to extract json data from body
app.use(express.json())
//cookie parser allows us to acees the cookies payload
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT,()=>{
    console.log("Server is listining on port "+ PORT);
    connetDB();
});