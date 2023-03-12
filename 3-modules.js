// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share what we want to)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor.js')
require('./7-mind-grenade')

console.log(names)

sayHi(names.john)
sayHi('susan')
sayHi(names.peter)

