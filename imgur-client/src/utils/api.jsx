var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'b3e45d604f01cf7';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization' : 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json()
    })
  }
};
