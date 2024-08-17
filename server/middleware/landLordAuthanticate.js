const jwt = require('jsonwebtoken')
const landLordAuthanticate = async(req,res,next) =>{
    try {
        const landLordToken = req.cookies.landLordToken

        if(!landLordToken)
        return res.status(404).send('there si no token')
        
        const verify = jwt.verify(landLordToken,process.env.LANDLORDPASSWORD)

        if(!verify)
        return res.status(404).send("this cookie is not authanticated")

        req.user = verify.user
        next()
    } catch (error) {
        res.status(500).send(error.message)
    }
}
 module.exports = landLordAuthanticate