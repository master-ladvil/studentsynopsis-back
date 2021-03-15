const jwt = require('jsonwebtoken')

module.exports = function (req,res,next){
    const token = req.header('auth-token-student')
    if(!token ) return res.status(400).send("Access Denied")

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
    }catch(err){
        res.status(400).send("bad token")
    }
}