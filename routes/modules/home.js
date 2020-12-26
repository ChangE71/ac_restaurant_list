const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.log(error))
})

// router.get('/search', (req, res) => {
//   const keyword = req.query.keyword
//   console.log(keyword)
//   Restaurant.find()
//     .lean()
//     .then(totalRestaurants => {
//       const restaurants = totalRestaurants.filter(restaurant => {
//         return restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()) ||
//           restaurant.name.toLowerCase().includes(keyword.toLowerCase())
//       })
//       return res.render('index', { restaurants, keyword })
//     })
//     .catch((error) => console.log(error))
// })

// //delete
// router.post('/restaurants/:id/delete', (req, res) => {
//   const id = req.params.id
//   return Restaurant.findById(id)
//     .then((restaurant) => restaurant.remove())
//     .then(() => res.redirect('/'))
//     .catch((error) => console.log(error))
// })

// //create
// router.get('/restaurants/new', (req, res) => {
//   return res.render('new')
// })

// router.post('/', (req, res) => {
//   const { name, name_en, category, location, phone, image, google_map, rating, description } = req.body
//   return Restaurant.create({ name, name_en, category, location, phone, image, google_map, rating, description })
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

// //之前crashed原因： show 的路由寫在 new 之前，所以 new 的 api 進來之後不小心就先被當成 show 路由的動態 :id 了
// router.get('/restaurants/:id', (req, res) => {
//   const id = req.params.id
//   return Restaurant.findById(id)
//     .lean()
//     .sort({ _id: 'asc' })
//     .then(restaurant => res.render('show', { restaurant }))
//     .catch(error => console.log(error))
// })

// //update
// router.get('/restaurants/:id/edit', (req, res) => {
//   const id = req.params.id
//   return Restaurant.findById(id)
//     .lean()
//     .then(restaurant => res.render('edit', { restaurant }))
//     .catch(error => console.log(error))
// })

// router.post('/restaurants/:id', (req, res) => {
//   const id = req.params.id
//   const { name, name_en, category, location, phone, image, google_map, rating, description } = req.body
//   return Restaurant.findById(id)
//     .then(restaurant => {
//       restaurant.name = name
//       restaurant.name_en = name_en
//       restaurant.category = category
//       restaurant.location = location
//       restaurant.phone = phone
//       restaurant.image = image
//       restaurant.google_map = google_map
//       restaurant.rating = rating
//       restaurant.description = description
//       return restaurant.save()
//     })
//     .then(() => res.redirect(`/restaurants/${id}`))
//     .catch(error => console.log(error))
// })

module.exports = router