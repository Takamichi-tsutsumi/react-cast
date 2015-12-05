var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 21,
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
var Badge = React.createClass({displayName: "Badge",
      render: function() {
        return  React.createElement("button", {className: "btn btn-primary", type: "button"}, 
          this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
      }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
render: function() {
  var list = this.props.thumbnailData.map(function(thumbnailProps){
    return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
  });

  return React.createElement("div", null, list)
}
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "thumbnail col-md-4 col-sm-6"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
          React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
              React.createElement(Badge, {title: this.props.title, number: this.props.number})
            )
         )
       )
  }
});

