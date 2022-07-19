const restaurants = require ('../models/restaurant')
const restaurantsMealType = require('../models/mealType')

exports.getAllRestaurants = (req, res) => {
    restaurants.find()
        .then(result => {
            res.status(200).json({
                message: "restaurants details fetched successfully",
                data: result
            })
        })

        .catch(error => {
            res.status(500).json({
                message: "not fetched",
                error: error
            })
        })
}

exports.getRestaurantsByCity = (req, res) => {

    let criteria = {
        city_name: req.params.cName
    }

    restaurants.find(criteria)
        .then(result => {
            res.status(200).json({
                message: "fetched all restaurants by city name",
                data: result
            })
        })
        .catch(error => {
            res.status(500).json({
                message: "not fetched",
                error: error
            })
        })
}

exports.getAllRestaurantsByFilter = (req, res) => {

    const filter = {}

    if (req.body.city_id) {
        filter.city = req.body.city_id
    }

    if (req.body.cuisine && req.body.cuisine.length > 0) {
        filter['Cuisine.name'] = {
            $in: req.body.cuisine
        }
    }

    if (req.body.lcost && req.body.hcost) {
        if (req.body.lcost == 0) {
            filter.cost = {
                $lte: req.body.hcost
            }
        } else {
            filter.cost = {
                $lt: req.body.hcost,
                $gt: req.body.lcost
            }
        }
    }

    let sort = 1

    if (req.body.sort) {
        sort: req.body.sort
    }

    //logic of pagination achieved through limit and skip method

    restaurants.find(filter).limit(2).skip(2 * (req.params.pageNo - 1)).sort({
            "cost": sort
        })
        .then(result => {
            res.status(200).json({
                message: "data fetched successfully",
                data: result
            })
        })

        .catch(error => {
            res.status(500).json({
                message: "error in database",
                error: error
            })
        })
}

exports.getRestaurantsMealType = (req, res) => {
    restaurantsMealType.find()
        .then(result => {
            res.status(200).json({
                message: "Restaurants Meal type Data fetched",
                data: result
            })
        })
        .catch(error => {
            res.status(500).json({
                message: "not fetched",
                error: error
            })
        })
}

exports.getRestaurantInfoById = (req, res) => {

    const requested_id = {infoId : req.params.infoId}

    restaurants.find({requested_id})
        .then(result => {
            res.status(200).json({
                message: 'Data fetched successfully' ,
                data : result 
            })
        })
        .catch(error => {
            res.status(500).json({
                message : 'Error fetching' ,
                error : error
            })
        })
}
