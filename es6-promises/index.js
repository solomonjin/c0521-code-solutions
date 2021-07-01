const takeAChance = require('./take-a-chance');

const promise = takeAChance('Solomon');

promise.then(text => console.log(text)).catch(err => console.log(err.message));
