import React from 'react';
import {red500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import BlogCard from './blog_card';

var BlogList = React.createClass({
	getInitialState: function() {
		return {
		}
	},

	render() {
		return (
			<div>
				<div className="row">
					<h2>Blog</h2>
				</div>
				<div className="row">
					<div className="col-xs">
						<BlogCard />
					</div>
					<div className="col-xs">
						<BlogCard />
					</div>
				</div>
			</div>
		)
	}
});

export default BlogList;
