const router = require('express').Router()

const Posts = require('./posts-model.js')

router.get('/:id', (req, res) => {
    const { id } = req.params

    Posts.findByUser(id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ message: 'could not find posts', err }))
})

router.post('/:id', (req, res) => {
    const { id } = req.params

    Posts.add(id, req.body.post_info)
        .then(success => res.json(200).json(success))
        .catch(err => res.json(500).json({ message: 'could not post', err }))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    Posts.remove(id, req.body.post_id)
        .then(success => res.json(200).json(success))
        .catch(err => res.status(500).json({ message: 'could not delete', err }))
})

module.exports = router