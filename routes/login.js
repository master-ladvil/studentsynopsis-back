const router = require("express").Router()
const testmod = require("../models/signupmod")


router.get('/',(req,res) => {
    res.send("inside testroute")
})


router.post('/', async (req,res) => {
    const newpost = new testmod({
        name: req.body.name,
        password : req.body.password,
        regNo : req.body.regNo,
        phoneNo : req.body.phoneNo
    })

    try{
        const uppost = await newpost.save()
        res.json(uppost)
    }catch(err){
        res.json({
            message : err
        })
    }
})


module.exports = router