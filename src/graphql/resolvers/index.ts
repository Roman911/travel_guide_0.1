const authResolver = require('./auth')
const eventsResolver = require('./events')
const postResolver = require('./post')
const locationsResolver = require('./locations')
const locationsListResolver = require('./locationList')
const commentsResolver = require('./comments')
const uploadImageResolver = require('./uploadImage')

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...postResolver,
  ...locationsResolver,
  ...locationsListResolver,
  ...commentsResolver,
  ...uploadImageResolver
}

module.exports = rootResolver