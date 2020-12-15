const router = require('express').Router()

const ViewPosts = require('./viewposts-model.js')

router.get('/:id', (req, res) => {
    const { id } = req.params

    ViewPosts.findByUser(id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ message: 'could not find posts', err }))
})

module.exports = router