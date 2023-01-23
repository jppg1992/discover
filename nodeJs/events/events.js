const { Console } = require('console')
const { EventEmitter } = require('events')

const emitter = new EventEmitter()

//emitter.on ouve sempre e emitter.once uma única vez
emitter.once('saySomething', msg => {
  console.log('Eu ouvi você: ', msg)
})

emitter.emit('saySomething', 'Mayk')
emitter.emit('saySomething', 'Brito')
