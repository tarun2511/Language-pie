const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require('cors');
const flashCardRoute = require("./routers/flashcards.route");

app.use("/", () => {
    res.send("Hello from the backend");
});

app.use("/v1/flashcards", flashCardRoute);

const server = () => {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log("successfully connected to the DB");
        app.listen(port, () => {
            console.log(`serer listening to port ${port}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

server();