const connectDataBase = require("./src/config/database");
const dotenv = require("dotenv");
const express = require('express')
const app = express()

//  Config
dotenv.config({ path: "src/config/config.env" });

// use this for take json data via body
app.use(express.json());

// Routes
const user = require("./src/routes/userRoute");

app.use("/api/v1",user);

// Connect DB
connectDataBase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
  });