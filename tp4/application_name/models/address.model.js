// fichier ./models/address.model.js
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    number : { type : Number, min : 1 },
    street : String,
    zip : Number,
    town : { type : String, required : true}
  });

module.exports = addressSchema;