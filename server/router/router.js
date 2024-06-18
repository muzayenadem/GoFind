const allHomes = require('../controller/Admin/allHomes')
const searchedHome = require('../controller/Homes/searchedHome')
const AddHome = require('../controller/LandLord/AddHome')
const landLordProfile = require('../controller/LandLord/LandLordProfile')
const landLordLogin = require('../controller/LandLord/landLordLogin')
const landLordSignup = require('../controller/LandLord/landLordSingup')
const renterLogin = require('../controller/Renter/renterLogin')
const renterProfile = require('../controller/Renter/renterProfile')
const renterSignup = require('../controller/Renter/renterSingup')
const landLordAuthanticate = require('../middleware/landLordAuthanticate')
const renterAuthanticate = require('../middleware/renterAuthanticate')

const  router = require('express').Router()
//get method
router.route('/all-homes:id').get(allHomes)
router.route('/api-renter-profile').get(renterAuthanticate,renterProfile)
router.route('/api-landlord-profile').get(landLordAuthanticate,landLordProfile)
router.route('/searched-home:id').get(searchedHome)

// post method
router.route('/api-renter-signup').post(renterSignup)
router.route('/api-renter-login').post(renterLogin)
router.route('/api-landlord-signup').post(landLordSignup)
router.route('/api-landlord-login').post(landLordLogin)
//examle
router.route('/add-home').post(AddHome)





module.exports = router