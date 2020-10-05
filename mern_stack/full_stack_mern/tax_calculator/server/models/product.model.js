const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
        },
        amount: {
            type: Number,
            required: [true, "{PATH} is required"],
            min: [0, "{PATH} must be over {MIN} dollars."],
        },
        description: {
            type: String,
            required: [true, "{PATH} is required."],
        },
        region: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
            // max: [2, "Please provide a {MAX} character state."],
        },
        postalCode: {
            type: String,
            required: [true, "{PATH} is required."],
            minlength: [5, "{PATH} must be at least {MINLENGTH} characters."],
        },
        country: {
            type: String,
            required: [true, "{PATH} is required."],
        },
        // tax: {
        //     type: Number,  
        // },
        // totalPrice: {
        //     type: Number,
        // },
    },
    
    { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;