const multer = require('multer')


const isLandlordLoggenned = require('../controller/AsureLoggined/isLandlordLoggened')
const isRenterLoggenned = require('../controller/AsureLoggined/isRenterLginned')
const logoutLandlord = require('../controller/AsureLoggined/logoutLandlord')
const logoutRenter = require('../controller/AsureLoggined/logoutRenter')
const searchedHome = require('../controller/Homes/searchedHome')
const AddHome = require('../controller/LandLord/AddHome')
const addProperty = require('../controller/LandLord/AddProperty')
const landLordProfile = require('../controller/LandLord/LandLordProfile')
const deleteProperty = require('../controller/LandLord/deleteProperty')
const landLordLogin = require('../controller/LandLord/landLordLogin')
const landLordSignup = require('../controller/LandLord/landLordSingup')
const listLandlordProperty = require('../controller/LandLord/listLandlordProperty')
const renterLogin = require('../controller/Renter/renterLogin')
const renterProfile = require('../controller/Renter/renterProfile')
const renterSignup = require('../controller/Renter/renterSingup')
const landLordAuthanticate = require('../middleware/landLordAuthanticate')
const renterAuthanticate = require('../middleware/renterAuthanticate')
const allPropertyList = require('../controller/property/AllPropertyList')
const singlePropertyDetail = require('../controller/property/singlePropertyDetail')
const singleProperty = require('../controller/property/singleProperty')

const  router = require('express').Router()

const storage = multer.memoryStorage();
const upload = multer({ storage });


//get method
router.route('/all-properties:id').get(allPropertyList)
router.route('/api-renter-profile').get(renterAuthanticate,renterProfile)
router.route('/api-landlord-profile').get(landLordAuthanticate,landLordProfile)
router.route('/searched-home:id').get(searchedHome)
router.route('/api-list-landlord-property').get(landLordAuthanticate,listLandlordProperty)
router.route('/api-property-detail:id').get(singlePropertyDetail)
router.route('/api-single-property:id').get(singleProperty)


//loginned asure api
router.route('/isrenterloggined').get(isRenterLoggenned)
router.route('/islandlordloggined').get(isLandlordLoggenned)

// logout api
router.route('/logout-renter').get(logoutRenter)
router.route('/logout-landlord').get(logoutLandlord)

// post method
router.route('/api-renter-signup').post(renterSignup)
router.route('/api-renter-login').post(renterLogin)
router.route('/api-landlord-signup').post(landLordSignup)
router.route('/api-landlord-login').post(landLordLogin)
router.route('/api-landlord-add-property').post(landLordAuthanticate, upload.array('files'),addProperty)
router.route('/api-delete-property').post(landLordAuthanticate,deleteProperty)

//examle
router.route('/add-home').post(AddHome)





module.exports = router