'use strict'
// const store = require('../store.js')
const showChallengesTemplate = require('./templates/challenge-listing.handlebars')

const showMenu = () => {
  $('.display').empty()
  $('.find-challenge-display').addClass('hidden')
  $('.menu').removeClass('hidden')
  $('form').trigger('reset')
  $('.create-challenge-display').addClass('hidden')
  $('.delete-challenge-display').addClass('hidden')
  $('.update-challenge-display').addClass('hidden')
  $('.main-nav').removeClass('sticky-top')
  $('body').addClass('unscrollable')
  window.scrollTo(0, 0)
}

const showFindChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.find-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
  window.scrollTo(0, 0)
}

const showDeleteChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.delete-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
  window.scrollTo(0, 0)
}

const showCreateChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.create-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
  window.scrollTo(0, 0)
}

const showUpdateChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.update-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
  window.scrollTo(0, 0)
}

const getChallengesSuccess = (data) => {
  const showChallengesHtml = showChallengesTemplate({ challenges: data.challenges })
  $('.display').removeClass('hidden')
  $('.display').html(showChallengesHtml)
  $('.menu').addClass('hidden')
  $('.main-nav').addClass('sticky-top')
  $('body').removeClass('unscrollable')
  window.scrollTo(0, 0)
}

const getChallengesFailure = () => {
  $('.display').html('Failed to find challenges.').addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
  window.scrollTo(0, 0)
}

const getChallengeSuccess = (data) => {
  stopTimeout() // stop user message from clearing display
  data = {challenges: data} // conform to challenges template format
  const showChallengeHtml = showChallengesTemplate({ challenges: data.challenges })
  $('.display').removeClass('hidden')
  $('.display').html(showChallengeHtml)
  $('.menu').addClass('hidden')
  $('form').trigger('reset')
  $('.find-challenge-display').addClass('hidden')
  window.scrollTo(0, 0)
}

const getChallengeFailure = () => {
  $('.display').html('Failed to find challenge.').addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
  window.scrollTo(0, 0)
}

const createChallengeSuccess = () => {
  $('.display').html('Challenge Created!').addClass('success-alert')
  $('form').trigger('reset')
  removeMessage()
  window.scrollTo(0, 0)
}

const createChallengeFailure = (data) => {
  $('.display').html(`Failed to create challenge.`).addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
  window.scrollTo(0, 0)
}

const updateChallengeSuccess = () => {
  $('.display').html('Challenge Updated!').addClass('success-alert')
  $('form').trigger('reset')
  removeMessage()
}

const updateChallengeFailure = (data) => {
  $('.display').html(`Failed to update challenge.`).addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
  window.scrollTo(0, 0)
}

const deleteChallengeSuccess = () => {
  $('.display').html('Challenge Deleted.').addClass('success-alert')
  $('form').trigger('reset')
  removeMessage()
  window.scrollTo(0, 0)
}
const deleteChallengeFailure = () => {
  $('.display').html('Failed to delete challenge.').addClass('fail-alert')
  $('form').trigger('reset')
  removeMessage()
  window.scrollTo(0, 0)
}

// Message Blink
let timeOut = null

const stopTimeout = function () {
  clearTimeout(timeOut)
}

const removeMessage = function () {
  stopTimeout()
  timeOut = setTimeout(() => {
    $('.display').html('').removeClass('fail-alert').removeClass('success-alert')
  }, 3500)
}
// end Message Blink

module.exports = {
  getChallengesSuccess,
  getChallengesFailure,
  showFindChallengeForm,
  getChallengeSuccess,
  getChallengeFailure,
  showCreateChallengeForm,
  showMenu,
  createChallengeSuccess,
  createChallengeFailure,
  showDeleteChallengeForm,
  deleteChallengeSuccess,
  deleteChallengeFailure,
  updateChallengeSuccess,
  updateChallengeFailure,
  showUpdateChallengeForm
}
