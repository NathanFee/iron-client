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
  console.log('got to api')
  console.log('This is ID:' + id)
  return $.ajax({
    url: config.apiUrl + `/challenges/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getChallenges,
  getChallenge
}
