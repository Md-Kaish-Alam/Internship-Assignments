const mealType = require('../Modules/MealType.json')


exports.GetAllWidget = (req, res) => {

    res.status(200).json({
        message: 'restaurants fetched successfully' ,
        mealList: mealType
    })
}