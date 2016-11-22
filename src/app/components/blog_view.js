import React from 'react';
import {red500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionGrade from 'material-ui/svg-icons/action/grade';

var BlogView = React.createClass({
	getInitialState: function() {
		return {
		}
	},

	render() {
		return (
			<div>
        <h2>Title</h2>
        <p>Body</p>
			</div>
		)
	}
});

export default BlogView;
