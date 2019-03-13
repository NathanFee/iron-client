'use strict'
const config = require('./config.js')
const store = require('./store.js')

const getChallenges = function () {
  return $.ajax({
    url: config.apiUrl + '/challenges',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getChallenge = function (id) {
  return $.ajax({
    url: config.apiUrl + `/challenges/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createChallenge = function (formData) {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + `/challenges`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'challenge': {
        'challenge_name': formData.challenge_name,
        'description': formData.description
      }
    }
  })
}

module.exports = {
  getChallenges,
  getChallenge,
  createChallenge
}
