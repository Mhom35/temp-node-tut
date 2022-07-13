//Modules
// every file is module 
const names = require('./4-names')
// console.log(names)

const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

require('./mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)