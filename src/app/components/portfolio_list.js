import React from 'react';
import {red500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import PortfolioCard from './portfolio_card';

var PortfolioList = React.createClass({
  getInitialState: function() {
    return {
    }
  },

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div className="row">
          <div className="col-xs">
            <PortfolioCard />
          </div>
          <div className="col-xs">
            <PortfolioCard />
          </div>
          <div className="col-xs">
            <PortfolioCard />
          </div>
        </div>
      </div>
	  )
  }
});

export default PortfolioList;
