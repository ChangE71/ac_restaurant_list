const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//create
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://dummyimage.com/600x300/096969/0ffabb.png&text=Restaurant'
  }
  const addRestaurant = req.body
  return Restaurant.create(addRestaurant)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


//之前crashed原因： show 的路由寫在 new 之前，所以 new 的 api 進來之後不小心就先被當成 show 路由的動態 :id 了
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

//update
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, name_en, category, location, phone, image, google_map, rating, description } = req.body
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.category = category
      restaurant.location = location
      restaurant.phone = phone
      restaurant.image = image
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then((restaurant) => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

module.exports = router