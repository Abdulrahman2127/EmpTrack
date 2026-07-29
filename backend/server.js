import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import cardRouter from "./routers/welcomeRoutes.js";
import connectDB from "./config/database.js";
import users from "./routers/userRoutes.js";
import empRoutes from "./routers/empRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? process.env.CLIENT_URL
        : "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/api/welcome", cardRouter);
app.use("/api/users", users);
app.use("/api/employees", empRoutes);

app.get("/", (req, res) => {
  res.send("Mini MERN Backend 🚀");
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});