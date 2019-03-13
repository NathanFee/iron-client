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
}

const showFindChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.find-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
}

const showDeleteChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.delete-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
}

const showCreateChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.create-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
}

const getChallengesSuccess = (data) => {
  const showChallengesHtml = showChallengesTemplate({ challenges: data.challenges })
  $('.display').removeClass('hidden')
  $('.display').html(showChallengesHtml)
  $('.menu').addClass('hidden')
}
const getChallengesFailure = () => {
  console.log('Failed to get challenges')
}

const getChallengeSuccess = (data) => {
  data = {challenges: data} // conform to challenges template format
  const showChallengeHtml = showChallengesTemplate({ challenges: data.challenges })
  $('.display').removeClass('hidden')
  $('.display').html(showChallengeHtml)
  $('.menu').addClass('hidden')
  $('form').trigger('reset')
  $('.find-challenge-display').addClass('hidden')
}

const getChallengeFailure = () => {
  console.log('Failed to get challenge')
}

const createChallengeSuccess = () => {
  // make data conform to challenges template format
  $('.display').html('Challenge Created!')
  removeMessage()
}

const createChallengeFailure = () => {
  // make data conform to challenges template format
  $('.display').html('Failed to Create Challenge')
  removeMessage()
}

// Message Blink
let timeOut = null

const stopTimeout = function () {
  clearTimeout(timeOut)
}

const removeMessage = function () {
  stopTimeout()
  timeOut = setTimeout(() => {
    $('.display').html('')
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
  showDeleteChallengeForm
}
