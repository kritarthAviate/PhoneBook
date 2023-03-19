const express = require("express");
const phonesRouter = require("./controllers/phones");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const decodeIDToken = require("./authenticateToken");

dotenv.config({});
app.use(cors());
app.use(decodeIDToken);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err.message);
  });

app.use("/api", phonesRouter);
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
