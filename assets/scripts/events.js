'use strict'
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onViewChallenges = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getChallenges(formData)
    .then(ui.getChallengesSuccess)
    .catch(ui.getChallengesFailure)
}

const onClickMenu = function () {
  event.preventDefault()
  ui.showMenu()
}

const onFindChallengeSubmit = function () {
  console.log('got to events')
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getChallenge(formData.id)
    .then(ui.getChallengeSuccess)
    .catch(ui.getChallengeFailure)
}

const onFindChallenge = function () {
  event.preventDefault()
  ui.showFindChallengeForm()
}

module.exports = {
  onViewChallenges,
  onFindChallenge,
  onFindChallengeSubmit,
  onClickMenu
}
