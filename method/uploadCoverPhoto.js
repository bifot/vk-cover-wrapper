const rp = require('request-promise')
const path = require('path')
const mime = require('mime')
const fs = require('fs')

module.exports = (uploadServer, dir) => {
  return new Promise((resolve, reject) => {
    return rp({
      url: uploadServer,
      method: 'post',
      formData: {
        file: {
          value: fs.createReadStream(dir),
          options: {
            filename: path.basename(dir),
            contentType: mime.lookup(dir)
          }
        }
      },
      json: true
    })
      .then(resolve)
      .catch(reject)
  })
}
