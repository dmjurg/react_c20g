var React = require('react');
var Header = require('./Header.js');
var Footer = require('./Footer.js');

var App = React.createClass({
	render: function() {
		return (
			<div>
        <Header />   
        <Footer />
      </div>
		);
	}
	
});
	
module.exports = App;
