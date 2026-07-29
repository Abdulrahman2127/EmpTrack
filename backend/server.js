import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cardRouter from "./routers/welcomeRoutes.js"
import connectDB from"./config/database.js";
import users from "./routers/userRoutes.js"
import empRoutes from "./routers/empRoutes.js";
const PORT = process.env.PORT || 3001;
dotenv.config()

const app = express();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(cookieParser());

app.use("/api/welcome" , cardRouter);
app.use("/api/users" , users );
app.use("/api/employees" , empRoutes );

app.get("/", (req, res) => {
  res.send("Mini MERN Backend 🚀");
});


app.listen(PORT, () => {
    
  connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});