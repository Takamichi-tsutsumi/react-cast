var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 11111,
    header: 'Learn React',
    description: 'RReact is fantastic new library for making fast, dynamic htmlReact is fantastic new library for making fast, dynamic htmleact is fantastic new library for making fast, dynamic html',
    imageUrl: 'http://facebook.github.io/react/img/logo_og.png'
    },{
    title: 'Show Courses',
    number: 12,
    header: 'Learn Gulp',
    description: 'Gulp will spend your development speedyGulp will spend your development speedyGulp will spend your development speedyGulp will spend your development speedyGulp will spend your development speedy',
    imageUrl: 'http://whiskers.nukos.kitchen/uploads/eyecatch/origin/gulp.png'
    }]
      };

// React, please render this class
var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));