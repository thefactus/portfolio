import React from 'react';
import {red500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionGrade from 'material-ui/svg-icons/action/grade';

var BlogCard = React.createClass({
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
            title="Post title"
            subtitle="Post subtitle"
          />
          <CardActions>
            <FlatButton
              label="Read more"
              primary={true}
            />
          </CardActions>
        </Card>
      </div>
    )
  }
});

export default BlogCard;
