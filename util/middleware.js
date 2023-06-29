const jwt = require('jsonwebtoken')
const { SECRET } = require('./config')
const { User, Session } = require('../models')

const tokenExtractor = async(req, res, next) => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        try {
            console.log(authorization.substring(7))
            req.decodedToken = jwt.verify(authorization.substring(7), SECRET)
        } catch (error) {
            console.log(error)
            return res.status(401).json({ error: 'token invalid' })
        }
    } else {
        return res.status(401).json({ error: 'token missing' })
    }
    const user = await User.findByPk(req.decodedToken.id)
    if(user.disabled) {
        return res.status(401).json({
            error: 'user disabled'
        })
    }

    const session = await Session.findByPk(req.decodedToken.sessionId)  
  
    if(!session) {
        return res.status(401).json({
            error: 'session invalid'
        })
    }

    next()
}

module.exports = { tokenExtractor }