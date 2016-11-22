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
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false, selectedIndex: 0};
		this.handleToggle = this.handleToggle.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	handleClose() {
		this.setState({open: false});
	}

  select(index) { 
    this.setState({selectedIndex: index});
    this.props.handleContent(index);
  }

	render() {

    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };

		const flat_button_style = {
			margin: 12,
		};

		const icon_button_style = {
			margin: 5,
		};

		const navbar = {
			width: 350,
		};

		const tab = {
			color: 'black',
			backgroundColor: '#F6F5F5',
			textTransform: 'none'
		};

		const inkBarStyle = {
			backgroundColor: 'rgb(0, 188, 212)'
		};

		return (
			<div>
				<div className="topnav">
					<ul>
						<li>
							<a href="/">Pablo Bello</a>
						</li>
					</ul>
					<div className="navbar-right" style={navbar}>
						<Tabs inkBarStyle={inkBarStyle}>
							<Tab label="Profile" style={tab} onActive={() => this.select(0)} />
							<Tab label="Blog" style={tab} onActive={() => this.select(1)} />
							<Tab label="Projects" style={tab} onActive={() => this.select(2)} />
							<Tab label="Contact" style={tab} onActive={() => this.select(3)} />
						</Tabs>
					</div>
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
