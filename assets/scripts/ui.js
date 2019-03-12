'use strict'
// const store = require('../store.js')
const showChallengesTemplate = require('./templates/challenge-listing.handlebars')

const getChallengesSuccess = (data) => {
  console.log(data)
  const showChallengesHtml = showChallengesTemplate({ challenges: data.challenges })
  $('.display').html(showChallengesHtml)
}

module.exports = {
  getChallengesSuccess
}
