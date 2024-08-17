const jwt = require('jsonwebtoken')
const isRenterLoggenned = async (req,res)=>{
 try {
    const renterToken = req.cookies.renterToken

    if(!renterToken)
        return res.status(402).send(false)

    const assure = jwt.verify(renterToken,process.env.RENTERPASSWORD)

    if(!assure)
        return res.status(403).send(false)

    res.status(200).send(true)
 } catch (error) {
    res.status(500).send(false)
 }   
}

module.exports  = isRenterLoggenned