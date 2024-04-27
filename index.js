const connectDataBase = require("./src/config/database");
const dotenv = require("dotenv");
const express = require('express')
const app = express()

//  Config
dotenv.config({ path: "src/config/config.env" });

console.log(process.env.PORT, 'index');
connectDataBase()

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
  });