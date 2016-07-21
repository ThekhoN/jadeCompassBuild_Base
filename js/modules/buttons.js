//var $ = require('jquery');

var $button = $('<button/>').html('click me');
    $button.on('click', function(){
       console.log('button was clicked!!!'); 
    });

module.exports = $button;