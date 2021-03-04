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

router.put('/:id', (req, res) => {
    const { id } = req.params

    Tournaments.findById(id)
    .then(game => {
        if (game) {
            Tournaments.update(id, req.body)
            .then(updated => {
                res.status(200).json(updated)
        })
        } else {
            res.status(404).json({ message: 'Could not find tournament with given id' })
        }
    })
    .catch (err => {
        res.status(500).json({ message: 'Failed to update tournament' });
    })
})

router.post('/', (req, res) => {
    Tournaments.add(req.body)
        .then(success => res.status(200).json(success))
        .catch(err => res.status(200).json(err))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Tournaments.remove(id)
        .then(success => res.json(200).json(success))
        .catch(err => res.status(200).json(err))
})

module.exports = router