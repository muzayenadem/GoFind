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

        const filter = params.filter ? params.filter : null

        const {wifi,pool,balcony,kitchen,parking,tv,airCondition,petFriendly,washingMachine,
            chimney,terrace,minibar,swimmingPool,electricVehicleCharge,garden,all
        }  = filter !== null && filter.amenities 

        const {hotel,apartment,house,chalet,camping,holidayPark,farmHouse,bedAndBreackfast,other} = filter !== null && filter.accomodation
        
        const isThereAmenities = !wifi&!pool&!balcony&!kitchen&!parking&!tv&!airCondition&!petFriendly&!washingMachine&
        !chimney&!terrace&!minibar&!swimmingPool&!electricVehicleCharge&!garden&!all

        const isThereAccomodation = !hotel&!apartment&!house&!chalet&!camping&!holidayPark&!farmHouse&!bedAndBreackfast&!other
        console.log({isThereAmenities})
        console.log({isThereAccomodation})
        
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
            if(filter !== null){
                homes = await propertyModel.find({$and:[
                    //guest
                 filter.bathroom !== 0 ? {'details.bathroom':filter.bathroom }:{},
                 filter.bedroom !== 0 ? {'details.bedroom':filter.bedroom}:{},
                 filter.Children !== 0 ? {'details.livingRoom':filter.Children}:{},
                 filter.adult !== 0 ? {'details.guestCapability':filter.adult}:{},
                   //amenities
                    !isThereAmenities == 1 ? {$and:[
                        {'amenities.tv':tv},{'amenities.balcony':balcony},{'amenities.washingMachine':washingMachine},{'amenities.kitchen':kitchen},
                        {'amenities.wifi':wifi},{'amenities.terrace':terrace},{'amenities.garden':garden},{'amenities.swimmingPool':swimmingPool},
                        {'amenities.pool':pool},{'amenities.minibar':minibar},{'amenities.electricVehicleCharge':electricVehicleCharge},{'amenities.parking':parking},
                        {'amenities.chimney':chimney},{'amenities.airCondition':airCondition},{'amenities.petFriendly':petFriendly},{'amenities.all':all},

                    ]} : {},
                            
                 // accomodation
                !isThereAccomodation == 1 ? {$or:[
                    {category:{$in:[
                        house == true && 'homes',
                        apartment == true && 'apartment',
                        hotel == true && 'hotels',
                        other == true && 'alternative'
                       ]}},
                       {subCategory:{$in:[
                        apartment == true && 'apartment',
                        camping == true && 'Campsite',
                        farmHouse == true && 'Farm stay',
                        bedAndBreackfast == true && 'Bed and breakfast',
                        chalet == true && 'Chalet',
                        holidayPark == true && 'Holiday park',
                       ]}}
                    ]} : {},
                    //something other
                ]})
                console.log({filter})
                console.log({hotel})
                console.log('filter data')
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