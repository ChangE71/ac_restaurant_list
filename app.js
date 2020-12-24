const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Restaurant = require('./models/restaurant.js')
const mongoose = require('mongoose')

const app = express()


mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ dafaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


//view homepage & showPage
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.log(error))
})


//把show功能拔掉後, new功能就正常了...


//search
app.get('/search', (req, res) => {
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

//delete
app.post('/restaurants/:id/delete', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then((restaurant) => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

//create
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

app.post('/', (req, res) => {
  const { name, name_en, category, location, phone, image, google_map, rating, description } = req.body
  return Restaurant.create({ name, name_en, category, location, phone, image, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

//update
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

app.post('/restaurants/:id', (req, res) => {
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

app.listen(3000, () => {
  console.log('app is serving on localhost:3000')
})