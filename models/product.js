var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timestamps: true
});

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        default: "New",
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    reviews: [reviewSchema],
    userId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);