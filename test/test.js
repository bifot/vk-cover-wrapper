const { uploadAndSaveCoverPhoto } = require('../index')

uploadAndSaveCoverPhoto(process.env.GROUP_ID, process.env.GROUP_TOKEN, process.env.COVER_PATH)
  .then(console.log)
  .catch(console.error)
