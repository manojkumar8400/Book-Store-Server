const connectDataBase = require("./src/config/database");
const dotenv = require("dotenv");
const express = require('express')
const app = express()

//  Config
dotenv.config({ path: "src/config/config.env" });

// use this for take json data
app.use(express.json());
app.use(express.static('public'))

// Routes
const user = require("./src/routes/userRoute");
const restaurent = require("./src/routes/restaurentRoute");
const addToCart = require("./src/routes/cartRoute");
const addFavRest = require("./src/routes/favRestRoute");
const addResReq = require("./src/routes/addResReqRoute");

app.use("/api/v1",user);

app.use("/api/v1", restaurent);

app.use("/api/v1", addToCart);

app.use("/api/v1", addFavRest);

app.use("/api/v1", addResReq);

// Connect DB
connectDataBase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
  });