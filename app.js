const _ = require('lodash')
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items) //flattens array [1, 2, 3, 4]
console.log(newItems)
