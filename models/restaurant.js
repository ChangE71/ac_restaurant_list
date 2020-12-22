const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  name_en: String,
  category: String,
  location: String,
  phone: String,
  image: String,
  google_map: String,
  rating: Number,
  description: String
})
module.exports = mongoose.model('Restaurant', restaurantSchema)