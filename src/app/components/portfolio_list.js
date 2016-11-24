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
          <div className="col-xs-12 col-sm-offset-3 col-sm-6 col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
            <PortfolioCard />
          </div>
        </div>
      </div>
	  )
  }
});

export default PortfolioList;
