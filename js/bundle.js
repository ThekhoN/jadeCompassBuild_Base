(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var $ = require('jquery');
var add = require('./modules/arithmetic.js');
var $button = require('./modules/buttons.js'); 

var result_add = add(2,3);

console.log('running sum result: ' + result_add);

$('body').append($button);
},{"./modules/arithmetic.js":2,"./modules/buttons.js":3}],2:[function(require,module,exports){
var add = function (a,b){
    return a + b;
}

module.exports = add;
},{}],3:[function(require,module,exports){
//var $ = require('jquery');

var $button = $('<button/>').html('click me');
    $button.on('click', function(){
       console.log('button was clicked!!!'); 
    });

module.exports = $button;
},{}]},{},[1]);
