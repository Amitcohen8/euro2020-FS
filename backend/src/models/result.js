const mongoose = require('mongoose');
// const validator = require('validator')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

const resultSchema = new mongoose.Schema({
    result: {
        type: [{
            gh: {
                type: Number,
                required: true
            },
            ga: {
                type: Number,
                required: true
            },
            num: {
                type: String,
                required: true
            }
        }],
        validate(value) {
            if (value.length < 51) {
                throw new Error('Please fill the missing results')
            }

        }

    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})


const Result = mongoose.model('Result', resultSchema)







// createMyUser()
module.exports = Result