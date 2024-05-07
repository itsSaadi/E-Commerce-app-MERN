

import mongoose from "mongoose"


const productsSchem = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
})


export const productsModel = mongoose.model('Products', productsSchem)