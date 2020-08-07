const router = require('express').Router()

const Users = require('./users-model.js')

router.get('/', (req, res) => {
    Users.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err))
})

router.get('/:id', idUser, (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ message: 'Could not find the user with given id.' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get user' })
        })
})

router.put('/:id', idUser, (req, res) => {
    const { id } = req.params

    Users.findById(id)
        .then(user => {
            if (user) {
                Users.update(id, req.body)
                    .then(updatedUser => {
                        res.json(updatedUser)
                    })
                    .catch(err => res.status(401).json({ message: 'Failed to update user', err}))
            } else {
                res.status(404).json({ message: 'Could not find user with given id' })
            }
        })
        .catch (err => {
            console.log(err)
            res.status(500).json({ message: 'Invalid user' })
        })
})


router.delete('/:id', idUser, (req, res) => {
    const { id } = req.params

    Users.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: deleted })
            } else {
                res.status(404).json({ message: 'Could not find user with given id' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to delete user' })
        })
})

function idUser (req, res, next) {
    const { id } = req.params

    Users.findById(id)
        .then(result => {
            if(result && Object.entries(result).length){
                next()
            }else {
                res.status(400).json({ message: 'User does not exist' })
            }
        })
}

module.exports = router