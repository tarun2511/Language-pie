const express = require("express");
const router = express.Router();
const Words = require("../db/words.model");


router.get("/", async (req, res) => {
    try{
        const words = await Words.find({});
        res.status(200).json(words);
    }
    catch(err){
        res.status(400).send(err);
    }
})

router.post("/addWord", async(req, res) => {
    try{
        res.status(201).send("Successfully added")
    }
    catch(err){
        res.status(400).send(err);
    }
})
