const router = require('express').Router()
const verify = require('../token_validation/login_validation')


router.get('/',verify,(req,res) => {
   res.json({message : "token verified"}) 
})


module.exports = router