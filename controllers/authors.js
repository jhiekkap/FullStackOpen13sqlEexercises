const router = require('express').Router()

const { User, Blog } = require('../models')

router.get('/', async (_req, res) => {
  const users = await User.findAll({
    include: {
      model: Blog,
      attributes: { exclude: ['userId'] }
    }
  })
  const usersToSend = users.map(user => ({
    author: user.name,
    articles: user.blogs.length,
    likes: user.blogs.reduce((acc, blog) => acc + blog.likes, 0), 
  }))
  res.json(usersToSend)
})

module.exports = router