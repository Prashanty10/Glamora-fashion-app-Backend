const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    if (!process.env.MONGO_URL) throw new Error("MONGO_URL is not defined");
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully ✅");
  } catch (err) {
    console.error("MongoDB connection error ❌", err);
    process.exit(1);
  }
}

module.exports = { connectToDatabase };

