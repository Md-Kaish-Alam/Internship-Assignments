const restaurants = require('../Modules/Restaurant.json')

exports.getAllRestaurants = (req, res) => {

    res.status(200).json({
        message: "restaurants fetched successfully",
        restaurantsList: restaurants
    })
}

exports.getRestaurantByName = (req, res) => {

    console.log(req.params.name)

    const filteredRest = restaurants.filter((item) => item.city == req.params.name);
    console.log(filteredRest);

    filteredRest.length ?
    res.status(200).json ({
        message: 'Restaurants by name fetched successfully' ,
        restaurantsList: filteredRest
    }):
    res.status(200).json({
        message: 'Restaurants by name fetched successfully 0 records fetched'
    })
}