var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://glaring-torch-6086.firebaseio.com/';

module.exports = React.createClass({
	getInitialState: function() {
		return {
			text: this.props.item.text,
      done: this.props.item.done,
      textChanged: false
		}
	},
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
	render: function() {
		return <div className="input-group">
			<span className="input-group-addon">
				<input
          type="checkbox"
          checked={this.state.done}
          onChange={this.handleDoneChange}
        />
			</span>
			<input type="text" 
				className="form-control"
				value={this.state.text}
        onChange={this.handleTextChange}
        disabled={this.state.done}
        />
			<span className="input-group-btn">
        {this.changesButtons()}
				<button
          className="btn btn-default"
          onClick={this.handleDeleteClick}
          >
					Delete
				</button>
        </span>
        </div>
  },
  changesButtons: function() {
    if(!this.state.textChanged) {
      return null
    } else {
      return [
        <button
          onClick={this.handleSaveClick}
          className="btn btn-default"
          >
          Save
       </button> ,
        <button
          onClick={this.handleUndoClick}
          className="btn btn-default"
            >
            Undo
        </button>
        ]
    }
  },
  handleSaveClick: function() {
    console.log(this.state.text);
    this.fb.update({text: this.state.text});
    this.setState({textChanged: false});
  },
  handleUndoClick: function() {
    this.setState({
      text: this.props.item.text,
      textChanged: false
    });
  },
  handleTextChange: function() {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
  },
  handleDoneChange: function(event) {
    var update = {done: event.target.checked};
    this.setState(update);
    this.fb.update(update);
  },
  handleDeleteClick: function() {
    this.fb.remove();
  },
})
