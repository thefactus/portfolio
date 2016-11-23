import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

var Contact = React.createClass({
	getInitialState: function() {
		return {
		}
	},

	render() {
		const textField = {
			color: 'black',
      zIndex: 0
		};

		const card_style = {
			marginTop: 12,
			marginBottom: 12,
		};

		return (
			<div>
				<div className="row">
          <div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
            <Card style={card_style}>
              <CardHeader
              title="Contact"
              />
              <CardMedia>
                <img src="/img/contact.jpg" />
              </CardMedia>
              <CardText>
                To contact me, just fill the form below.
                <TextField
                  floatingLabelText="Your name"
                  inputStyle={textField}
                  floatingLabelStyle={textField}
                  fullWidth={true}
                />
                <TextField
                  floatingLabelText="Your email"
                  inputStyle={textField}
                  floatingLabelStyle={textField}
                  fullWidth={true}
                />
                <TextField
                  floatingLabelText="Your message"
                  multiLine={true}
                  rows={2}
                  rowsMax={8}
                  textareaStyle={textField}
                  floatingLabelStyle={textField}
                  fullWidth={true}
                />
              </CardText>
            </Card>
          </div>
        </div>
			</div>
		)
	}
});

export default Contact;
