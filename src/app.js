require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser")
const connectDB = require("./config/database")
const cors = require("cors")
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser())


const authRouter = require("./routes/auth")
const dashboardRouter = require("./routes/dashboard")

app.use("/", authRouter)
app.use("/", dashboardRouter)

connectDB()
.then(() => {
    console.log("Database connection established...")
    const PORT = process.env.PORT
    app.listen(PORT, () => {
    console.log("server up on port " + PORT)
})
})
.catch((err) => {
    console.error("Database cannot be connected" + err.message)
})