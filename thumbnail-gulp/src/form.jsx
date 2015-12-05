var Badge = require('badge');
var Autocompleter = require('autocompleter')

render: function() {
	return <div>
		<Autocompleter list={this.props.list} />
		<Badge text={this.props.text} number={this.props.number} />
	</div>

}