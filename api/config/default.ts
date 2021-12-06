require('dotenv').config()

module.exports = {
  server: {
    port: Number(process.env.SERVER_PORT),
  },
  database: {
    url: process.env.DB_URL,
  },
  mailgun: {
    domain: process.env.MAILGUN_DOMAIN,
    username: process.env.MAILGUN_USERNAME,
    apiKey: process.env.MAILGUN_APIKEY,
    from: process.env.MAILGUN_FROM,
  },
}
