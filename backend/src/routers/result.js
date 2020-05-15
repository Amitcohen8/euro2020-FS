
const express = require('express')
const auth = require('../middleware/auth')
const router = new express.Router()
const Result = require('../models/result')



router.post('/result', auth, async (req, res) => {

    let result = await Result.findOne({ owner: req.user._id })
    console.log('HHHH',result)


    try {
        if (!result) {
            result = new Result({
                result: [...req.body],
                owner: req.user._id
            })
            await result.save()
            res.status(201).send(result)
        } else {
          await Result.update({ owner: req.user._id }, {
                result: [...req.body]
            })
            res.status(204).send()
        }

    } catch (e) {
        res.status(400).send(e)
    }
    
})

module.exports = router