const router = require('express').Router() 
const { Session } = require('../models')
const { tokenExtractor } = require('../util/middleware')

router.delete('/', tokenExtractor, async (request, response) => {
  const session = await Session.findByPk(request.decodedToken.sessionId)

  if(session.userId !== request.decodedToken.id) {
    return response.status(401).json({
      error: 'unauthorized'
    })
  }

  await session.destroy()
  
  response
    .status(200)
    .send({ message: 'logged out' })
})

module.exports = router