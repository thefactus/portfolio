import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const profile = <FontIcon className="material-icons">face</FontIcon>;
const blogList = <FontIcon className="material-icons">view_list</FontIcon>;
const portfolio = <FontIcon className="material-icons">work</FontIcon>;
const contactMail = <FontIcon className="material-icons">contact_mail</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Profile"
            icon={profile}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Blog"
            icon={blogList}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Portfolio"
            icon={portfolio}
            onTouchTap={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Contact"
            icon={contactMail}
            onTouchTap={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;
