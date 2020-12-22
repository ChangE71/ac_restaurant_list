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

app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.log(error))
})
// app.get('/search', (req, res) => {
//   const keyword = req.query.keyword
//   console.log(keyword)
//   const restaurants = Restaurant.lts.filter(restaurant => {
//     return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.name_en.toLowerCase().includes(keyword.toLowerCase())
//   })
//   res.render('index', { restaurants: restaurants, keyword: keyword })
// })

// app.get('/restaurants/:restaurant_id', (req, res) => {
//   const restaurant = Restaurant.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
//   console.log(req.params.restaurant_id)
//   res.render('show', { restaurant: restaurant })
// })

app.listen(3000, () => {
  console.log('app is serving on localhost:3000')
})