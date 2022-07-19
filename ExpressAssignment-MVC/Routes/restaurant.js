const express = require('express')
const restaurantController = require('../Controllers/restaurant')
const mealTypes = require('../Controllers/widget')

const router = express.Router()


router.get('/filterByCity/:name' , restaurantController.getRestaurantByName)
router.get('/allRestaurants', restaurantController.getAllRestaurants)

router.get('/widget' , mealTypes.GetAllWidget)

module.exports = router;
