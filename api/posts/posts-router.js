const router = require('express').Router()

const Posts = require('./posts-model.js')

router.get('/', (req, res) => {
    Posts.find()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Posts.findByUser(id)
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({ message: 'could not find posts', err }))
})

router.get('/:id/post', idPost, (req, res) => {
    const { id } = req.params

    Posts.findById(id)
        .then(post => {
            if(post) {
                res.status(201).json(post)
            } else {
                res.status(404).json({ message: 'could not find post' })
            }
        })
        .catch(err => res.status(500).json({ message: 'Failed to get post', err  }))
})

router.post('/:id', (req, res) => {
    const { id } = req.params

    Posts.add(id, req.body)
        .then(success => res.json(200).json(success))
        .catch(err => res.json(500).json({ message: 'could not post', err }))
})

router.post('/:id/like', (req, res) => {
    const { id } = req.params

    Posts.addLike(req.body.like_username, id)
        .then(success => res.json(200).json(success))
        .catch(err => res.json(500).json({ message: 'could not like post', err }))
})

router.delete('/:id/like', (req, res) => {
    const { id } = req.params

    Posts.removeLike(req.body.like_username, id)
        .then(success => res.json(200).json(success))
        .catch(err => res.json(500).json({ message: 'could not like post', err }))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    Posts.remove(id, req.body.postid)
        .then(success => res.json(200).json(success))
        .catch(err => res.status(500).json({ message: 'could not delete', err }))
})

function idPost (req, res, next) {
    const { id } = req.params

    Posts.findById(id)
        .then(post => {
            if (post && Object.entries(post).length){
                next()
            } else {
                res.status(400).json({ messge: 'Post does not exist' })
            }
        })
}

module.exports = router