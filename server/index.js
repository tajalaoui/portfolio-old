const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const nodemailerMailGun = require('nodemailer-mailgun-transport')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // * SETING UP.
  const auth = {
    auth: {
      api_key: '2529a13b340ea29e4a496405b491a20d-713d4f73-4da6d23f',
      domain: 'sandbox4567862060aa46cf92b970c42b8c73c0.mailgun.org'
    }
  }

  // * SENDING MAIL.
  app.post('/server', (req, res) => {
    const output = `
    <p>You have a new message from your portfolio</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `
    let transporter = nodemailer.createTransport(nodemailerMailGun(auth))

    let mailOptions = {
      from: `portfolio ${req.body.email}`,
      to: 'Tajeddine-dev@hotmail.com',
      subject: req.body.subject,
      html: output
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', data.messageId)
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(data))
    })
  })

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
