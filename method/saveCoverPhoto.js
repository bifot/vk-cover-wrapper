const rp = require('request-promise')
const api = require('../utils/api')

module.exports = (settings) => {
  return new Promise((resolve, reject) => {
    return api('photos.saveOwnerCoverPhoto', settings)
      .then(resolve)
      .catch(reject)
  })
}
