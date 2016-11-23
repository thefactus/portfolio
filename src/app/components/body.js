import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import ActionHome from 'material-ui/svg-icons/action/home';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import {blue900} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Navbar from "./navbar";
import Profile from './profile';
import BlogList from './blog_list';
import PortfolioList from './portfolio_list';
import Contact from './contact';
import BottomNav from './bottom_nav';

var Body = React.createClass({
  getInitialState() {
    return {
      content: (<Profile />),
    };
  },

  openContent(content, contentStyle = this.state.contentStyle) {
    this.setState({
      content: content
    });
  },

  changeContent(index) {
    switch(index) {
      case 1:
        this.setState({
          content: <BlogList openContent={this.openContent} />,
        });
        break;
      case 2:
        this.setState({
          content: <PortfolioList />,
        });
        break;
      case 3:
        this.setState({
          content: <Contact />,
        });
        break;
      default:
        this.setState({
          content: <Profile />,
        });
        break;
    }
  },

	render() {
		const flat_button_style = {
			margin: 12,
		};

		const icon_button_style = {
			margin: 5,
		};

		return (
			<div>
        <Navbar handleContent={this.changeContent} />
				<div className="section" style={this.state.contentStyle}>
					<div className="container-fluid">
            {this.state.content}
					</div>
				</div>
        <div className="bottom-nav-fixed">
          <BottomNav handleContent={this.changeContent} />
        </div>
			</div>
		)
	}
});

export default Body;
