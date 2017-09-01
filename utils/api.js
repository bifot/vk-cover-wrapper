const rp = require('request-promise')

module.exports = (method, settings) => {
  return new Promise((resolve, reject) => {
    return rp({
      method: 'post',
      url: `https://api.vk.com/method/${method}`,
      form: settings,
      json: true
    })
      .then(body => body.response ? resolve(body) : reject(body))
      .catch(reject)
  })
}
