const router = require('express').Router()

const Likes = require('./likes-model.js')

router.get('/:id/post', (req, res) => {
    const { id } = req.params

    Likes.findById(id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ message: 'could not find posts', err }))
})

module.exports = router