const router = require('express').Router()

const Games = require('./games-model.js')

router.get('/:game/game', (req, res) => {
    const { game } = req.params

    Games.findByGame(game)
        .then(games => res.status(200).json(games))
        .catch(err => res.status(500).json({ message: 'could not find games', err }))
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Games.findByTournamentId(id)
        .then(game => res.status(200).json(game))
        .catch(err => res.status(500).json({ message: 'could not find games', err }))
})

module.exports = router