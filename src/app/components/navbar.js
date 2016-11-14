import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import ActionHome from 'material-ui/svg-icons/action/home';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import {blue900} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {open: false};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	handleClose() {
		this.setState({open: false});
	}

	render() {

		const flat_button_style = {
			margin: 12,
		};

		const icon_button_style = {
			margin: 5,
		};

		return (
			<div>
				<div className="topnav">
					<ul className="">
						<FlatButton label="Pablo Bello" style={flat_button_style} />
					</ul>
					<ul className="topnav-right">
						<li className="icon">
						<IconButton
							iconClassName="material-icons"
							onClick={this.handleToggle}
							style={icon_button_style}
						>
						menu
						</IconButton>
						</li>
						<li><FlatButton label="Home" style={flat_button_style}/></li>
						<li><FlatButton label="Career" style={flat_button_style}/></li>
						<li><FlatButton label="Blog" style={flat_button_style}/></li>
						<li><FlatButton label="Portfolio" style={flat_button_style}/></li>
						<li><FlatButton label="Contact" style={flat_button_style}/></li>
						<li><FlatButton label="About" style={flat_button_style}/></li>
					</ul>
					<Drawer
						docked={false}
						width={200}
						open={this.state.open}
						onRequestChange={(open) => this.setState({open})}
					>
					</Drawer>
				</div>
			</div>
		)
	}
};

export default Navbar;
