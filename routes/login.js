const router = require("express").Router()
const testmod = require("../models/signupmod")
const loginValidation = require('../validation/validation')
const { route } = require("./signup")
const jwt = require("jsonwebtoken") 

router.get('/',(req,res) => {
    res.send("inside loginroute")
})

router.get('/getall', async (req,res) => {
    try{
    const getalluser = await testmod.find()
    res.json(getalluser)
    }catch(err){res.json({message : err})}
})
router.post('/', async (req,res) => {
    //validating the entry
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    //checking for users
    const user = await testmod.findOne({ regNo : req.body.regNo })
    if(!user ) return res.status(400).send("Email or password wrong!!")
    //to check if password is correct
    if (user.password !== req.body.password) { return res.status(400).send("hold up, catch up a vibe and type the correct password")}
    
    const token = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token-student', token).send(token)

})


module.exports = router