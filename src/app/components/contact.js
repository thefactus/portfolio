import React from 'react';
import TextField from 'material-ui/TextField';

var Contact = React.createClass({
	getInitialState: function() {
		return {
		}
	},

	render() {
		const textField = {
			color: 'white'
		};

		return (
			<div>
				<div className="row">
          <div className="col-sm-12 col-lg-offset-3 col-lg-6">
            <h2>Contact</h2>
            <p>Lorem ipsum</p>
            <TextField
              floatingLabelText="Your name"
              inputStyle={textField}
              floatingLabelStyle={textField}
              fullWidth={true}
            /><br />
            <TextField
              floatingLabelText="Your email"
              inputStyle={textField}
              floatingLabelStyle={textField}
              fullWidth={true}
            /><br />
            <TextField
              floatingLabelText="Your message"
              multiLine={true}
              rows={2}
              rowsMax={8}
              textareaStyle={textField}
              floatingLabelStyle={textField}
              fullWidth={true}
            /><br />
          </div>
        </div>
			</div>
		)
	}
});

export default Contact;
