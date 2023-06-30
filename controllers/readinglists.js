const router = require('express').Router()
const { Readinglist } = require('../models')
const { tokenExtractor } = require('../util/middleware')

router.post('/', async (req, res) => {
  const readinglist = await Readinglist.create(req.body)
  res.json(readinglist)
})

router.put('/:id', tokenExtractor, async (req, res) => {
  const readinglist = await Readinglist.findByPk(req.params.id)
  if (readinglist) {
    await readinglist.update({ read: req.body.read })
    res.json(readinglist)
  } else {
    res.status(404).end()
  }
})

module.exports = router