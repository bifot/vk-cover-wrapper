const getUploadServer = require('./getUploadServer')
const uploadCoverPhoto = require('./uploadCoverPhoto')
const saveCoverPhoto = require('./saveCoverPhoto')

module.exports = (groupId, groupToken, coverPath) => {
  return new Promise((resolve, reject) => {
    getUploadServer(groupId, groupToken)
      .then((uploadServer) => {
        uploadCoverPhoto(uploadServer, coverPath)
          .then((coverData) => {
            saveCoverPhoto(Object.assign({}, coverData, { access_token: groupToken }))
              .then(resolve)
              .catch(reject)
          })
          .catch(reject)
      })
      .catch(reject)
  })
}
