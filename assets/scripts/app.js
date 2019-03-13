'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const events = require('./events.js')

$(() => {
  $('.view-challenges-button').on('click', events.onViewChallenges)
  $('.find-challenge-button').on('click', events.onFindChallenge)
  $('#find-challenge-form').on('submit', events.onFindChallengeSubmit)
  $('.create-challenge-button').on('click', events.onCreateChallenge)
  $('#create-challenge-form').on('submit', events.onCreateChallengeSubmit)

  $('#dropdown-menu-link').on('click', events.onClickMenu)
  // authorization
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#dropdown-sign-out-link').on('click', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  // Show sign-in-form
  $('.sign-in-button').on('click', authEvents.onSignInButton)
  // Show sign-up-form
  $('.sign-up-button').on('click', authEvents.onSignUpButton)
  $('.close-password-modal').on('click', authEvents.onClosePasswordModal)
})
