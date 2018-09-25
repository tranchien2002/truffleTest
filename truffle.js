// Allows us to use ES6 in our migrations and tests.
require('babel-register')
require('babel-polyfill')
module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
