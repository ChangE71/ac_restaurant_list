const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: String,
  location: String,
  phone: String,
  name_en: String,
  image: String,
  google_map: String,
  rating: Number,
  description: String
})
module.exports = mongoose.model('Restaurant', restaurantSchema)