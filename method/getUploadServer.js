const rp = require('request-promise')
const api = require('../utils/api')

module.exports = (groupId, groupToken, settings) => {
  return new Promise((resolve, reject) => {
    return api('photos.getOwnerCoverPhotoUploadServer', Object.assign({}, {
      group_id: groupId,
      access_token: groupToken,
      v: 5.68
    }, settings))
      .then(body => resolve(body.response.upload_url))
      .catch(reject)
  })
}
