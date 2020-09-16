const router = require('express').Router()

const Comments = require('./comments-model.js')
const Users = require('../users/users-model.js')

router.get('/:id/post', (req, res) => {
    const { id } = req.params

    Comments.findById(id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ message: 'could not find posts with comments', err }))
})

router.get('/:id/user', (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(users => {
            Comments.findByUsername(users.username)
                .then(posts => res.status(200).json(posts))
                .catch(err => res.status(404).json({ message: 'could not find posts with comments', err}))
        })
        .catch(err => res.status(500).json({ message: 'could not find user', err }))
})

module.exports = router