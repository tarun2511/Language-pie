const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    try{
        

    }
    catch(err){
        res.status(400).send(err);
    }
})
