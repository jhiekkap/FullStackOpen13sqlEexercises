const express = require('express')
const app = express()
require('express-async-errors')
const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')
const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const authorRouter = require('./controllers/authors')

app.use(express.json())
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/authors', authorRouter)

const errorHandler = (error, _req, res, next) => {
  console.error(error.message)
  if (error.message === 'Validation error: Validation isEmail on username failed') {
    return res.status(400).send({ error: 'invalid username' })
  }
  if (error.message === 'Validation error: Validation min on year failed') {
    return res.status(400).send({ error: 'invalid year' })
  }
  next(error)
}
app.use(errorHandler)

const start = async () => {
  await connectToDatabase()
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

start()

