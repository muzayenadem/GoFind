const propertyModel = require("../../../models/propertyModel")
const viewsModel = require("../../../models/viewsModel")
const jwt = require('jsonwebtoken')
const addViews = async(req,res) =>{
    try {
         const id = req.params.id
        const userToken = req.cookies.renterToken
         const singleProperty = await propertyModel.findOne({_id:id})
        if(!singleProperty)
        return res.status(403).send('there is no data with this id')

        const main = async() =>{
            const isViewedBefore = await viewsModel.findOne({propertyId:id})
            if(!isViewedBefore){
                if(!userToken){
                    const firstViews = new viewsModel({
                        propertyId:id,
                        views :1
                    })
                    const savedView = await firstViews.save()
                    //console.log({savedView})
                    //res.status(200).send(singleProperty) 
                    return savedView
                 }
                 const verify = jwt.verify(userToken,process.env.RENTERPASSWORD)
                 if(verify){
                    const newViews = new viewsModel({
                        propertyId:id,
                        people:[verify.renterId],
                        views:1
                    })
                    const savedView = await newViews.save()
                    //console.log({savedView})
                    return savedView
                }
               }

            if(isViewedBefore){
                if(!userToken){
                    isViewedBefore.views = isViewedBefore.views + 1
                    const addViews = await isViewedBefore.save()
                   // console.log({addViews:addViews.views})
                    return addViews
                    //res.status(200).send(singleProperty) 
                }
                const verify = jwt.verify(userToken,process.env.RENTERPASSWORD)
                if(verify){
                    const find = isViewedBefore.people.find(id => id == verify.renterId)
                    if(!find){
                        isViewedBefore.people.push(verify.renterId)
                        isViewedBefore.views = isViewedBefore.views + 1
                        const savedView = await isViewedBefore.save()
                        //console.log({savedForExist:savedView})   
                        return savedView
                    }
                    isViewedBefore.views = isViewedBefore.views + 1
                    const savedView = await isViewedBefore.save()
                    //console.log({savedForExist:savedView})   
                    console.log('already viewed')
                    return savedView
                }
            }
        
   }
   const result = await main()
   console.log({result})
   const views = result.views 
   console.log({views})
   const data = {singleProperty,views}  
   res.status(200).send({views})
    console.log(id)
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = addViews