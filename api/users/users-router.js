const router = require('express').Router()

const Users = require('./users-model.js')
const Details = require('./details-model.js')

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

router.get('/:id/username', (req, res) => {
    const { id } = req.params

    Users.findBy({ username: id })
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

router.post('/:id/details/user', idUser, (req, res) => {
    Details.addDetails(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(400).json(err))
})

router.post('/:id/details/creator', idUser, (req, res) => {
    Details.addCreators(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(400).json(err))
})

router.post('/:id/details/carpic', idUser, (req, res) => {
    Details.addCarpics(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(400).json(err))
})

router.post('/:id/details/othergame', idUser, (req, res) => {
    Details.addOthergames(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(400).json(err))
})

router.post('/:id/details/agent', idUser, (req, res) => {
    Details.addAgents(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(400).json(err))
})

router.post('/:id/details/ytlink', idUser, (req, res) => {
    Details.addYtlinks(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(400).json(err))
})

router.get('/:id/details/valorant', idUser, (req, res) => {
    const { id } = req.params

    Details.findDetails(id)
        .then(userdetails => {
            Details.findCreators(id)
                .then(usercreators => {
                    Details.findOthergames(id)
                        .then(userothergames => {
                            Details.findAgents(id)
                                .then(useragents => {
                                    Details.findYtlinks(id)
                                        .then(userytlinks => {
                                            res.status(200).json({
                                                user_details: userdetails[0],
                                                user_creators: usercreators,
                                                user_othergames: userothergames,
                                                user_agents: useragents,
                                                user_ytlinks: userytlinks
                                            })
                                        })
                                        .catch(err => res.status(500).json(err, 'ytlinks'))
                                })
                                .catch(err => res.status(500).json(err, 'agents'))

                        })
                        .catch(err => res.status(500).json(err, 'othergames'))
                })
                .catch(err => res.status(500).json(err, 'creators'))
        })
        .catch(err => res.status(500).json(err, 'details'))

    // Details.findCarpics(id)
    //     .then(users => carpics = users)
    //     .catch(err => res.status(500).json(err))
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