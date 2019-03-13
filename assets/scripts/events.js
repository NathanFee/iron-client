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

const onDeleteChallengeSubmit = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.deleteChallenge(formData.id)
    .then(ui.deleteChallengeSuccess)
    .catch(ui.deleteChallengeFailure)
}

const onUpdateChallengeSubmit = function () {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.updateChallenge(formData)
    .then(ui.updateChallengeSuccess)
    .catch(ui.updateChallengeFailure)
}

const onFindChallenge = function () {
  event.preventDefault()
  ui.showFindChallengeForm()
}

const onDeleteChallenge = function () {
  event.preventDefault()
  ui.showDeleteChallengeForm()
}

const onCreateChallenge = function () {
  event.preventDefault()
  ui.showCreateChallengeForm()
}

const onUpdateChallenge = function () {
  event.preventDefault()
  ui.showUpdateChallengeForm()
}

module.exports = {
  onViewChallenges,
  onFindChallenge,
  onFindChallengeSubmit,
  onClickMenu,
  onCreateChallenge,
  onCreateChallengeSubmit,
  onDeleteChallenge,
  onDeleteChallengeSubmit,
  onUpdateChallenge,
  onUpdateChallengeSubmit
}
