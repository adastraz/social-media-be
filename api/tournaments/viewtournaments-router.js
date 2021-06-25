const router = require('express').Router()

const Tournaments = require('./tournaments-model.js')

router.get('/', (req, res) => {
  Tournaments.find()
      .then(tournaments => res.status(200).json(tournaments))
      .catch(err => res.status(500).json({ message: 'could not find tournaments', err }))
})

router.get('/:game/game', (req, res) => {
  const { game } = req.params

  Tournaments.findByGame(game)
      .then(tournaments => res.status(200).json(tournaments))
      .catch(err => res.status(500).json({ message: 'could not find tournaments', err }))
})

router.get('/:id', (req, res) => {
  const { id } = req.params

  Tournaments.findById(id)
      .then(tournament => res.status(200).json(tournament))
      .catch(err => res.status(500).json({ message: 'could not find tournaments', err }))
})

module.exports = router
