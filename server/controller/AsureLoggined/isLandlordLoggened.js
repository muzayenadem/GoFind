const jwt = require('jsonwebtoken')
const isLandlordLoggenned = async (req,res)=>{
 try {
    const landLordToken = req.cookies.landLordToken

    if(!landLordToken)
        return res.status(402).send(false)

    const assure = jwt.verify(landLordToken,process.env.LANDLORDPASSWORD)

    if(!assure)
        return res.status(403).send(false)

    res.status(200).send(true)
 } catch (error) {
    res.status(500).send(false)
 }   
}

module.exports  = isLandlordLoggenned