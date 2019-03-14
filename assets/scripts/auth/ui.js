'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#user-message').html('Sign-up successful, please sign in.').addClass('success-alert')
  $('form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  removeMessage()
  showSignInForm()
}

const signUpFailure = () => {
  $('#user-message').html('Error on Sign-up.').addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
}

const signInSuccess = (responseData) => {
  $('form').trigger('reset')
  // save the Token
  store.user = responseData.user
  $('.sign-in-display').addClass('hidden')
  $('.swap-form-display').addClass('hidden')
  $('.menu').removeClass('hidden')
  $('.navbar-nav').removeClass('hidden')
  $('#navbarDropdownMenuLink').html(store.user.email)
  removeMessage()
  window.scrollTo(0, 0)
}

const signInFailure = () => {
  $('#user-message').html('Error on Sign-in.').addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
}

const changePasswordSuccess = () => {
  $('#modal-alert-message').html('Password Change Successful!').addClass('modal-success-alert')
  $('form').trigger('reset')
  removeMessage()
}

const changePasswordFailure = () => {
  $('#modal-alert-message').html('Error Changing Password. Please try again.').addClass('modal-fail-alert')
  $('form').trigger('reset')
  removeMessage()
}

const signOutSuccess = () => {
  $('#user-message').html('Successfully Signed-Out!').addClass('success-alert')
  $('form').trigger('reset')
  $('.navbar-nav').addClass('hidden')
  $('.swap-form-display').removeClass('hidden')
  $('.display').empty()
  $('.display').addClass('hidden')
  $('.find-challenge-display').addClass('hidden')
  $('.create-challenge-display').addClass('hidden')
  $('.delete-challenge-display').addClass('hidden')
  $('.update-challenge-display').addClass('hidden')
  $('.menu').addClass('hidden')
  $('.main-nav').removeClass('sticky-top')
  $('body').addClass('unscrollable')
  store.user = {}
  showSignUpForm()
  removeMessage()
}

const signOutFailure = () => {
  $('#user-message').html('Error Signing Out!').addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
}

const showSignInForm = function () {
  $('.sign-up-display').addClass('hidden')
  $('.sign-in-display').removeClass('hidden')
  $('.sign-in-button').addClass('hidden')
  $('.sign-up-button').removeClass('hidden')
  $('form').trigger('reset')
  $('.swap-form-message').html('Need an account?')
}

const showSignUpForm = function () {
  $('.sign-in-display').addClass('hidden')
  $('.sign-up-display').removeClass('hidden')
  $('.sign-up-button').addClass('hidden')
  $('.sign-in-button').removeClass('hidden')
  $('form').trigger('reset')
  $('.swap-form-message').html('Already have an account?')
}

const closePasswordModal = function () {
  $('#changePasswordModal').modal('toggle')
  // wait until modal fades before reseting forms
  setTimeout(() => {
    $('#change-password-form').trigger('reset')
  }, 1500)
}

let timeOut = null

const stopTimeout = function () {
  clearTimeout(timeOut)
}

const removeMessage = function () {
  stopTimeout()
  timeOut = setTimeout(() => {
    $('#user-message').html('').removeClass('fail-alert').removeClass('success-alert')
    $('#modal-alert-message').html('').removeClass('modal-success-alert').removeClass('modal-fail-alert')
  }, 3500)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  showSignInForm,
  showSignUpForm,
  closePasswordModal
}
