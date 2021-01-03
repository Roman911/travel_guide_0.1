const authResolver = require('./auth')
const eventsResolver = require('./events')
const postResolver = require('./post')
const locationsResolver = require('./locations')
const locationsListResolver = require('./locationList')
const commentsResolver = require('./comments')
const uploadFile = require('./uploadFile')

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...postResolver,
  ...locationsResolver,
  ...locationsListResolver,
  ...commentsResolver,
  ...uploadFile
};

module.exports = rootResolver