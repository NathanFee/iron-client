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

module.exports = {
  onViewChallenges
}
