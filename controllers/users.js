const router = require('express').Router()
const { User, Blog, Readinglist } = require('../models')

router.get('/', async (_req, res) => {
  const users = await User.findAll({
    include: {
      model: Blog,
      attributes: { exclude: ['userId'] }
    }
  })
  res.json(users)
})

router.post('/', async (req, res) => {
  const user = await User.create(req.body)
  res.json(user)
})

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ['id', 'userId', 'createdAt', 'updatedAt'] },
    include: [
      {
        model: Blog,
        as: 'readings',
        include: {
          model: Readinglist,
          attributes: { exclude: ['blogId', 'userId'] }
        },
        attributes: {
          exclude: ['userId', 'createdAt', 'updatedAt'], 
        },
        through: {
          attributes: [],
        },
      },
    ]
  })
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

router.put('/:username', async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.params.username
    }
  })
  if (user) {
    await user.update(req.body)
    res.json(user)
  } else {
    res.status(404).end()
  }
})

module.exports = router