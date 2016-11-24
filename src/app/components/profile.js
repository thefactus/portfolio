import React from 'react';
import Timeline from './timeline';
import Chip from 'material-ui/Chip';
import {Card, CardText} from 'material-ui/Card';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
};

var Profile = React.createClass({
  getInitialState() {
    return {
      chipData: [
        {key: 0, label: 'Ruby on Rails'},
        {key: 1, label: 'REST Api'},
        {key: 2, label: 'PostgreSQL'},
        {key: 3, label: 'ReactJS'},
        {key: 4, label: 'TDD/BDD'},
        {key: 5, label: 'AWS (basics - EC2, S3)'},
        {key: 6, label: 'Vim/Tmux'},
        {key: 7, label: 'Capistrano'},
        {key: 8, label: 'Elasticsearch'},
      ]
    };
  },

  renderChip(data) {
    return (
      <Chip
        key={data.key}
        style={styles.chip}
      >
        {data.label}
      </Chip>
    );
  },

	render() {
    const center = {
      display: 'block',
      margin: 'auto',
      textAlign: 'center'
    };

		const card_style = {
			marginTop: 12,
			marginBottom: 12,
		};

		return (
			<div>
        <div className="row">
          <div className="col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-10 col-lg-offset-1 col-lg-10">
              <Card style={card_style}>
                <CardText>
                  <div style={center}>
                    <img src="/img/PabloBello.png" />
                    <br />
                    <br />
                    <h1 className="animated fadeInUp">Pablo Bello</h1><br />
                    <h1
                      className="animated fadeInUp"
                      style={{color: '#00BCD4', fontSize: '23px'}}>

                      Full Stack Developer
                    </h1>
                    <br />
                    <p className="description animated fadeInUp">
                      Intermediate developer with over 4 years of experience in Ruby on Rails, Javascript, HTML & CSS using Scrum and Agile Methodologies with SQL database expertise.
                    </p>
                    <br />
                  </div>
                  <div style={styles.wrapper} className="animated fadeInUp">
                    {this.state.chipData.map(this.renderChip, this)}
                  </div>
                </CardText>
              </Card>
            <Timeline />
          </div>
        </div>
			</div>
		)
	}
});

export default Profile;
