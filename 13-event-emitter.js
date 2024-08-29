const EventEmitter = require('events')

const customerEmitter = new EventEmitter()

customerEmitter.on('theResponse', (name, id)=> {
    console.log(`data received ${name} and ID: ${id}`)
})

customerEmitter.on('theResponse', ()=> {
    console.log(`the next thing......more logic `)
})

customerEmitter.emit('theResponse', 'dina', 222)
