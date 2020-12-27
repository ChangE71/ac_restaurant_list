const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.log(error))
})

// router.post('/', (req, res) => {
//   if (!req.body.image) {
//     req.body.image = 'https://dummyimage.com/600x300/096969/0ffabb.png&text=Restaurant'
//   }
//   const addRestaurant = req.body
//   return Restaurant.create(addRestaurant)
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

module.exports = router