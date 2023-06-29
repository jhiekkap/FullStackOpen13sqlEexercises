const router = require('express').Router()
const { Readinglist } = require('../models')

router.post('/', async (req, res) => {
  const readinglist = await Readinglist.create(req.body)
  res.json(readinglist)
})

module.exports = router