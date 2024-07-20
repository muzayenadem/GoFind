const propertyModel = require('../../models/propertyModel')

const allPropertylist = async(req,res) =>{
    try {
        const param = req.params.id
        const params = JSON.parse(param)
        const regex = new RegExp(params.value,'i')

        const minPrice = params.minPrice ? params.minPrice : null
        const maxPrice = params.maxPrice ? params.maxPrice : null

        const minArea = params.minArea ? params.minArea : null
        const maxArea = params.maxArea ? params.maxArea : null
        
        const category = params.category ? params.category : null

        const room = params.room ? params.room : null

        let homes = []
            if(params.value == 'default'){
                homes = await propertyModel.find({})
                console.log('all data')
            }
            if(params.value !==undefined & params.value !== 'default'){
            homes = await propertyModel.find({$or:[{name:regex},{category:regex},{subCategory:regex},{type:regex},]})
            console.log('searched data')   
            }
            if(category !== null){
            homes = await propertyModel.find({category})
            console.log('category data')    
            }
            if(minPrice !== null & maxPrice !== null){
            homes = await propertyModel.find({$and:[{price:{$gte:minPrice}},{price:{$lte:maxPrice}}]})  
            console.log('price data')
            }
            if(minArea !== null & maxArea !== null){
            homes = await propertyModel.find({$and:[{"area.min":{$gte:minArea}},{"area.max":{$lte:maxArea}}]})
            console.log('Area data')
            }
            if(room !== null){
                homes = await propertyModel.find({"details.bedroom":room})
                console.log('rooms data')
            }
            if(!homes.length){
            console.log('no data')
            return res.status(402).send('there is no an product with this id')
            }
            return res.status(200).send(homes)
    } catch (error) {
        console.log({error:error.message})
    }
}

module.exports = allPropertylist