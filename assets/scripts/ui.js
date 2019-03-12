'use strict'
// const store = require('../store.js')
const showChallengesTemplate = require('./templates/challenge-listing.handlebars')

const getChallengesSuccess = (data) => {
  console.log(data)
  const showChallengesHtml = showChallengesTemplate({ challenges: data.challenges })
  $('.display').removeClass('hidden')
  $('.display').html(showChallengesHtml)
  $('.menu').addClass('hidden')
}

const showMenu = () => {
  $('.display').addClass('hidden')
  $('.menu').removeClass('hidden')
}

module.exports = {
  getChallengesSuccess,
  showMenu
}
