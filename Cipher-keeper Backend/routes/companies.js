const express = require('express');
const router = express.Router();
const {Company, validate} = require('../models/companies');
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const ObjectId = require('mongoose').Types.ObjectId;

router.get("/", auth, async (req, res)=> {
    const { _id:loggedInUserId }  = req.user;
    const company =  await Company.find({userId: loggedInUserId});
    res.send(company);
});

router.get("/:id", auth, async (req, res) =>{
    if(!ObjectId.isValid(req.params.id) )return res.status(403).send([{message:"Company ID is invalid "}]);
    const company = await Company.findById(req.params.id);
    if(!company) return res.status(404).send([{message:"Could not find company with the given ID"}]);
    res.send(company);
});

router.post("/", auth,  async (req, res) => {
    const { _id:loggedInUserId }  = req.user;
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    let company = new Company({companyName: req.body.companyName, userId: loggedInUserId});
    company.save();
    res.send(company);
});

router.put("/:id", auth, async(req, res)=>{
    if(!ObjectId.isValid(req.params.id) )return res.status(403).send([{message:"Company ID is invalid "}]);
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const company = await Company.findByIdAndUpdate(req.params.id, {name: req.body.companyName},{new:true} );
    if(!company) return res.status(404).send([{message:"Could not find company with the given ID"}]);
    res.send(company);
});

router.delete("/:id", [auth, admin], async (req, res) => {
    if(!ObjectId.isValid(req.params.id) )return res.status(403).send([{message:"Company ID is invalid "}]);
    const company = await Company.findByIdAndRemove(req.params.id)
    if(!company) return res.status(404).send([{message:"Could not find category with the given ID"}]);
    res.send(company);
});

module.exports = router;