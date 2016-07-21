//var $ = require('jquery');
var add = require('./modules/arithmetic.js');
var $button = require('./modules/buttons.js'); 

var result_add = add(2,3);

console.log('running sum result: ' + result_add);

$('body').append($button);