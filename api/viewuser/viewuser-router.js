const router = require('express').Router()

const Users = require('../users/users-model.js')
const Details = require('../users/details-model.js')

router.get('/:id/username', (req, res) => {
    var { id } = req.params
    if (id.includes('%')) { 
        Users.findBy({ username: id.replace('%', ' ') })
            .then(user => {
                if (user) {
                    res.status(200).json(user)
                } else {
                    res.status(404).json({ message: 'Could not find the user with given id.' })
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to get user', err })
            })
    } else {
        Users.findBy({ username: id })
            .then(user => {
                if (user) {
                    res.status(200).json(user)
                } else {
                    res.status(404).json({ message: 'Could not find the user with given id.' })
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to get user', err })
            })
    }
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

router.get('/:id/details/rl', idUser, (req, res) => {
    const { id } = req.params

    Details.findDetails(id)
        .then(userdetails => {
            Details.findCreators(id)
                .then(usercreators => {
                    Details.findOthergames(id)
                        .then(userothergames => {
                            Details.findCarpics(id)
                                .then(carpics => {
                                    Details.findYtlinks(id)
                                        .then(userytlinks => {
                                            res.status(200).json({
                                                user_details: userdetails[0],
                                                user_creators: usercreators,
                                                user_othergames: userothergames,
                                                user_carpics: carpics,
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