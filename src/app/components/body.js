import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import ActionHome from 'material-ui/svg-icons/action/home';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import {blue900} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

class Body extends React.Component {
	render() {

		const AppBarStyle = {
			backgroundColor: blue900
		};

		const flat_button_style = {
			margin: 12,
		};

		const icon_button_style = {
			margin: 5,
		};

		return (
			<div>
				<div className="section">
					<div className="container-fluid">
            <h1>Header</h1>
					</div>
				</div>
			</div>
		)
	}
};

export default Body;
