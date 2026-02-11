const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price annot be negative'],
        max: [1000, 'Price cannot exceed 1000'],
    },
    category: {
        type: String,
        enum: ['Starter', 'Main', 'Dessert', 'Drinks'],
        required: true,
        message: '{VALUE} is not a valid category',
    },
    isVegetarian: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Dish', dishSchema);