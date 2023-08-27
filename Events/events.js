const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('event', (data, secondData) => {
    console.log('event')
    console.log(data)
    console.log(secondData)
})

customEmitter.emit('event', 'First date', [1, 2, 4])