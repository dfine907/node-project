//Modules - encapsulated code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')

sayHi('Bob')
sayHi(names.john)
sayHi(names.peter)
