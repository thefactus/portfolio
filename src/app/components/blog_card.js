import React from 'react';
import {red500} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import BlogView from './blog_view';

var BlogCard = React.createClass({
  getInitialState: function() {
    return {
    }
  },

  openContent(){
    this.props.openContent(
      <BlogView />,
      {
        backgroundColor: 'white',
        color: 'black'
      }
    )
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
              onTouchTap={this.openContent}
            />
          </CardActions>
        </Card>
      </div>
    )
  }
});

export default BlogCard;
