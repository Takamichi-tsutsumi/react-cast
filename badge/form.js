var Badge = React.createClass({
  render: function() {
    return <button>
    {this.props.title} - {this.props.number}
    </button>
  }
});

var Form = React.createClass({
  render: function() {
    return <div>
        <Badge title={this.props.title} number={this.props.number} />
      </div>
  }
});


// create Form

var options = {
  title: 'Inblx',
  number: 5
}

React.createElement(Form, options)
