const Wordpress = require('wpapi');
const { backendURL } = require('./constants');

const wp = new Wordpress({
  endpoint: `${backendURL}/wp-json`
})

module.exports = wp;