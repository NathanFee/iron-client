'use strict'
// const store = require('../store.js')
const showChallengesTemplate = require('./templates/challenge-listing.handlebars')

const showMenu = () => {
  $('.display').empty()
  $('.find-challenge-display').addClass('hidden')
  $('.menu').removeClass('hidden')
}

const showFindChallengeForm = () => {
  $('.display').removeClass('hidden')
  $('.find-challenge-display').removeClass('hidden')
  $('.menu').addClass('hidden')
}

const getChallengesSuccess = (data) => {
  console.log(data)
  const showChallengesHtml = showChallengesTemplate({ challenges: data.challenges })
  $('.display').removeClass('hidden')
  $('.display').html(showChallengesHtml)
  $('.menu').addClass('hidden')
}
const getChallengesFailure = () => {
  console.log('Failed to get challenges')
}

const getChallengeSuccess = (data) => {
  data = {challenges: data}
  const showChallengeHtml = showChallengesTemplate({ challenges: data.challenges })
  console.log(showChallengeHtml)
  $('.display').removeClass('hidden')
  $('.display').html(showChallengeHtml)
  $('.menu').addClass('hidden')
  $('.find-challenge-display').addClass('hidden')
}

const getChallengeFailure = () => {
  console.log('Failed to get challenge')
}

module.exports = {
  getChallengesSuccess,
  getChallengesFailure,
  showFindChallengeForm,
  getChallengeSuccess,
  getChallengeFailure,
  showMenu
}
