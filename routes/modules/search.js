const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  console.log(keyword)
  Restaurant.find()
    .lean()
    .then(totalRestaurants => {
      const restaurants = totalRestaurants.filter(restaurant => {
        return restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()) ||
          restaurant.name.toLowerCase().includes(keyword.toLowerCase())
      })
      return res.render('index', { restaurants, keyword })
    })
    .catch((error) => console.log(error))
})


module.exports = router