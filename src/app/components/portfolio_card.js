import React from 'react';
import {red500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionGrade from 'material-ui/svg-icons/action/grade';

var PortfolioCard = React.createClass({
	getInitialState: function() {
		return {
		}
	},

	render() {
		const style = {
			margin: 12,
		};

		const card_style = {
			marginTop: 12,
			marginBottom: 12,
		};

		return (
			<div>
				<Card style={card_style}>
					<CardHeader
					title="URL Avatar"
					subtitle="Subtitle"
					avatar="http://www.material-ui.com/images/jsa-128.jpg"
					/>
					<CardMedia
						overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
					>
						<img src="http://www.material-ui.com/images/nature-600-337.jpg" />
					</CardMedia>
					<CardTitle title="Card title" subtitle="Card subtitle" />
					<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
						Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
						Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					</CardText>
					<CardActions>
						<FlatButton label="Action1" />
						<FlatButton label="Action2" />
					</CardActions>
				</Card>
			</div>
		)
	}
});

export default PortfolioCard;
