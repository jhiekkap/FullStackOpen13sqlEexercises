// const router = require('express').Router()

// const { User, Note } = require('../../lessons/models')

// router.get('/', async (_req, res) => {
//   const users = await User.findAll({
//     include: {
//       model: Note,
//       attributes: { exclude: ['userId'] }
//     }
//   })
//   res.json(users)
// })

// module.exports = router