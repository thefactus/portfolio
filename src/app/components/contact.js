import React from 'react';
import TextField from 'material-ui/TextField';

var Contact = React.createClass({
	getInitialState: function() {
		return {
		}
	},

	render() {
		return (
			<div>
        <TextField
          floatingLabelText="Your name"
        />
        <TextField
          floatingLabelText="Your email"
        />
        <TextField
          floatingLabelText="Your message"
          multiLine={true}
          rows={2}
          rowsMax={8}
        />
			</div>
		)
	}
});

export default Contact;
