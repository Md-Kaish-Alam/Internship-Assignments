const restaurantController = require('../controller/restaurant')

const express = require('express')
const router = express.Router();



router.post('/restaurant/filter/:pageNo' , restaurantController.getAllRestaurantsByFilter)
router.get('/:cName', restaurantController.getRestaurantsByCity)
router.get('/restaurant/:infoId' , restaurantController.getRestaurantInfoByID)
router.get('/restaurant/mealType', restaurantController.getRestaurantsMealType)

module.exports = routers