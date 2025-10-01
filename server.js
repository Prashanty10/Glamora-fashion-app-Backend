const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { connectToDatabase } = require("./database/db");
const authRoutes = require("./Routes/routes");

const app = express();
connectToDatabase();


app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);


app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
