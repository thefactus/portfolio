import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';

var Timeline = React.createClass({
	getInitialState: function() {
		return {
		}
	},

	render() {
    const ContentTextColor = {
      color: '#9E9E9E'
    }

		return (
			<div>
        <section id="cd-timeline" className="cd-container" >
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <img src="img/icons/work.svg" />
            </div>

            <div className="cd-timeline-content">
              <h2>Full Stack Developer</h2>
              <div style={ContentTextColor}>
                <h3>Remote - US based company</h3>
                <p>
                  ● Ruby on Rails
                </p>
                <p>
                  ● Heroku
                </p>
                <p>
                  ● Redis/Resque
                </p>
                <p>
                  ● REST API
                </p>
              </div>
              <span className="cd-date">Jan 2017 - Present</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location">
              <img src="img/icons/work.svg" />
            </div>

            <div className="cd-timeline-content">
              <h2>Full Stack Developer</h2>
              <div style={ContentTextColor}>
                <h3>Freelancer</h3>
                <p>
                  ● REST API
                </p>
                <p>
                  ● React/Angular JS
                </p>
              </div>
              <span className="cd-date">Jan 2016 - Dec 2016</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location">
              <img src="img/icons/work.svg" />
            </div>

            <div className="cd-timeline-content">
              <h2>Ruby on Rails Developer</h2>
              <div style={ContentTextColor}>
                <h3>Brazil Technology</h3>
                <p>
                  ● Lead team of up to 3 developers to create an application used by government agencies for management of administrative procedures.
                </p>
              </div>
              <span className="cd-date">May 2014 - Jan 2016</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location">
              <img src="img/icons/work.svg" />
            </div>

            <div className="cd-timeline-content">
              <h2>Ruby on Rails Developer</h2>
              <div style={ContentTextColor}>
                <h3>Freelancer</h3>
                <p>
                  ● Second International Conference on Primary Health Care
                </p>
                <p>
                  ● System for managing users who participated in the congress.
                  Over 1000 participants using the system.
                  Done with Ruby on Rails.
                </p>
              </div>
              <span className="cd-date">Dec 2013</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location">
              <img src="img/icons/work.svg" />
            </div>

            <div className="cd-timeline-content">
              <h2>Php Developer</h2>
              <div style={ContentTextColor}>
                <h3>Freelancer</h3>
                <p>
                  ● First International Congress on Health Care: Evidence-Based APS - NUEPES
                </p>
                <p>
                  ● System for managing users who participated in the congress.
                  Over 1200 participants using the system.
                  Done using php with Zend Framework.
                </p>
              </div>
              <span className="cd-date">Dec 2011</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location">
              <img src="img/icons/work.svg" />
            </div>

            <div className="cd-timeline-content">
              <h2>Php Developer - Zend Framework</h2>
              <div style={ContentTextColor}>
                <h3>Nucleus of Information Technology (UFPI)</h3>
                <p>
                  ● Maintaining and developing new features to University's main page.
                </p>
              </div>
              <span className="cd-date">Apr 2011 - Apr 2013</span>
            </div>
          </div>

          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location">
              <img src="img/icons/school.svg" />
            </div>

            <div className="cd-timeline-content">
              <h2>Bachelor's Degree, Computer Science</h2>
              <div style={ContentTextColor}>
                <h3>Federal University of Piauí (UFPI)</h3>
                <p>
                  ● C, C++, C#, Java, Python, Ruby, Javascript, Haskell
                </p>
                <p>
                  ● Mysql, Oracle
                </p>
                <p>
                  ● Kinect, Leap Motion
                </p>
                <p>
                  ● Software Engineering
                </p>
              </div>
              <span className="cd-date">2009 - 2014</span>
            </div>
          </div>
        </section>
			</div>
		)
	}
});

export default Timeline;
