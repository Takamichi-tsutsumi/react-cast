// We need to show a button and a list
// This component should know when to show up
// based on whent the user clicks on a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
	handleClick: function() {
		this.setState({open: !this.state.open}); // stateをsetした後renderする。値を変えただけじゃrenderされない。
	},
	getInitialState: function() {
		return { open: false }
	},
	handleItemClick: function(item) {
		this.setState({
			open: false,
			itemTitle: item
		})
	},
	render: function() {
		var list = this.props.items.map(function(item) {
			return <ListItem
				whenItemClicked={this.handleItemClick}
				item={item}
				className={this.state.itemTitle === item ? "active" : ""} />
		}.bind(this));

		return <div className="dropdown">
			<Button
			whenClicked={this.handleClick}
			className="btn-default" 
			title={this.state.itemTitle || this.props.title}
			subTitleClassName="caret" />
			<ul className={"dropdown-menu " + (this.state.open ? "show" : "") } >
				{list}
			</ul>

		</div>
	}
});

