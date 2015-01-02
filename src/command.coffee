greet = require '../lib'
parseArgs = require 'minimist'

command = ->
  options = parseArgs process.argv.slice(2)
  console.log greet options['_'][0], options['drunk']

module.exports = command
