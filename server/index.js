const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
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
  const smtpAuth = {
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: 'tajeddine@mg.devtaj.com',
      pass: '325d99c2be255190ef32526985c0d0e6-074fa10c-5a05494e',
    },
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
    let transporter = nodemailer.createTransport(smtpAuth)

    let mailOptions = {
      replyTo: req.body.email,
      from: process.env.MAIL,
      to: process.env.MAIL,
      subject: req.body.subject,
      html: output,
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
    badge: true,
  })
}
start()
