import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth",authRoute);

app.get("/",(req,res)=>{
    res.send("Working");
})

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})