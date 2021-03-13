const router = require("express").Router()
const signupmod = require("../models/signupmod")
const registerValidation = require('../validation/validation')






router.get('/',(req,res) => {
    res.send("inside testroute")
})





router.post('/', async (req,res) => {
//validation
    const {error} = registerValidation(req.body)
    if(error){
    return res.status(400).send(error.details[0].message)
    }
//checking for alreday registered

   /*  const regNoExist = await signupmod.findOne({regNo : req.body.regNo})
    if(regNoExist){return res.status(400).json({message : "register no already exist"})}

    const emailExist = await signupmod.findOne({emailId : req.body.emailId})
    if(emailExist){return res.status(400).json({message : "email already exist"})} */

//new user
    const newpost = new signupmod({
        name: req.body.name,
        year : req.body.year,
        section : req.body.section,
        password : req.body.password,
        regNo : req.body.regNo,
        phoneNo : req.body.phoneNo,
        emailId : req.body.emailId
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