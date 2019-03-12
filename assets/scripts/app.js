'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')

$(() => {
  // authorization
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-link').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)

  $('.sign-in-button').on('click', authEvents.onSignInButton)
  $('.sign-up-button').on('click', authEvents.onSignUpButton)
  $('.close-password-modal').on('click', authEvents.onClosePasswordModal)
})
