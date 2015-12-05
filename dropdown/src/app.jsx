var React = require('react');
var Dropdown = require('./dropdown')

var options = {
    title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
    items: [
        'Apple Pie',
        'Peache Cobbler',
        'Coconut cream Pie'
    ]

};

// React, please render this class
var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));