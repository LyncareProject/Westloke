const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'gmail'
const EMAIL_USER = process.env.EMAIL_USER || 'westlokemusic@gmail.com'
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || 'yekjjeqffmvobetw'

/* eslint-disable prefer-destructuring */

/** @type {string} */
const APP_CONFIG_JSON = JSON.stringify({
  EMAIL_SERVICE,
  EMAIL_USER,
  EMAIL_PASSWORD
}).replace(/"/g, '\\"')

module.exports = {
  APP_CONFIG_JSON,
  EMAIL_SERVICE,
  EMAIL_USER,
  EMAIL_PASSWORD
}
