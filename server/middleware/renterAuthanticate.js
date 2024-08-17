const jwt = require('jsonwebtoken')
const renterAuthanticate = async(req,res,next) =>{
    try {
        const renterToken = req.cookies.renterToken

        if(!renterToken)
        return res.status(404).send('there si no token')
        
        const verify = jwt.verify(renterToken,process.env.RENTERPASSWORD)

        if(!verify)
        return res.status(404).send("this cookie is not authanticated")

        req.user = verify.user
        next()
    } catch (error) {
        res.status(500).send(error.message)
    }
}
 module.exports = renterAuthanticate