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
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getChallenge(formData.id)
    .then(ui.getChallengeSuccess)
    .catch(ui.getChallengeFailure)
}

const onCreateChallengeSubmit = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createChallenge(formData)
    .then(ui.createChallengeSuccess)
    .catch(ui.createChallengeFailure)
}

const onFindChallenge = function () {
  event.preventDefault()
  ui.showFindChallengeForm()
}

const onCreateChallenge = function () {
  event.preventDefault()
  ui.showCreateChallengeForm()
}

module.exports = {
  onViewChallenges,
  onFindChallenge,
  onFindChallengeSubmit,
  onClickMenu,
  onCreateChallenge,
  onCreateChallengeSubmit
}
