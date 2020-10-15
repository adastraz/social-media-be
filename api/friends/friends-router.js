const router = require('express').Router()

const Friends = require('./friends-model.js')
const Users = require('../users/users-model.js')

router.get('/:id', (req, res) => {
    const { id } = req.params

    Friends.findAll(id)
        .then(friends => res.status(200).json(friends))
        .catch(err => res.status(500).json({ message: 'could not find friends', err}))
})

router.get('/:id/opp', (req, res) => {
    const { id } = req.params

    Friends.findOpp(id)
        .then(friends => res.status(200).json(friends))
        .catch(err => res.status(500).json({ message: 'could not find friends', err}))
})

router.post('/:id', (req, res) => {
    const { id } = req.params

    Friends.add(id, req.body.friend)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json({ message: 'failed to add friend', err}))
})

router.post('/:id/byusername', (req, res) => {
    const { id } = req.params

    Users.findBy({ username: req.body.friend })
        .then(success => {
            Friends.add(id, success[0].id)
                .then(friend => res.status(200).json(friend))
                .catch(err => res.status(500).json({ message: 'failed to add friend', err}))
        })
        .catch(err => res.status(500).json({ message: 'failed to find friend', err}))
})

router.delete('/:id/byusername', (req, res) => {
    const { id } = req.params

    Users.findBy({ username: req.body.friend })
        .then(success => {
            Friends.remove(id, success[0].id)
                .then(friend => res.status(200).json(friend))
                .catch(err => res.status(500).json({ message: 'failed to remove friend', err}))
        })
        .catch(err => res.status(500).json({ message: 'failed to find friend', err}))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    Friends.remove(id, req.body.friend)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(500).json({ message: 'failed to remove friend', err}))
})

module.exports = router