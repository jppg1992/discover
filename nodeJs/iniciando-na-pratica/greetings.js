const getFlagValue = require('./get-flag')

console.log(`Olá ${getFlagValue('--name')}, ${getFlagValue('--greeting')} `)
