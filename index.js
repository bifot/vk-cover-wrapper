const getUploadServer = require('./method/getUploadServer')
const uploadCoverPhoto = require('./method/uploadCoverPhoto')
const saveCoverPhoto = require('./method/saveCoverPhoto')
const uploadAndSaveCoverPhoto = require('./method/uploadAndSaveCoverPhoto')

module.exports = {
  getUploadServer,
  uploadCoverPhoto,
  saveCoverPhoto,
  uploadAndSaveCoverPhoto
}
