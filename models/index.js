const Blog = require('./blog')
const User = require('./user')
const Readinglist = require('./readinglist')
const Session = require('./session')

User.hasMany(Blog)
Blog.belongsTo(User)

User.belongsToMany(Blog, { through: Readinglist, as: 'readings' })
Blog.belongsToMany(User, { through: Readinglist })

Blog.hasMany(Readinglist)
Readinglist.belongsTo(Blog)

module.exports = {
  Blog,
  User,
  Readinglist,
  Session,
}
