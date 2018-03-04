import React, { Component } from 'react';
import './App.css';

import Experience from './App/Experience'
import Skills from './App/Skills';

class App extends Component {
  render() {
    return (
<div>
  {/* Page Container */}
  <div className="w3-content w3-margin-top" style={{maxWidth: 1400}}>
    {/* The Grid */}
    <div className="w3-row-padding">
      {/* Left Column */}
      <div className="w3-third">
        <div className="w3-white w3-text-grey w3-card-4">
          <div className="w3-display-container">
            <img src="/cv_photo.jpg" style={{width: '100%'}} alt="Avatar" />
            <div className="w3-display-bottomleft w3-container w3-text-black">
              <h2 className='w3-text-white'>Maxim Ilyin</h2>
            </div>
          </div>
          <div className="w3-container">
            <p><i className="fa fa-briefcase fa-fw w3-margin-right color1" />
              Full stack javascript developer
            </p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large color1" />
              Minsk, Belarus
            </p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large color1" />
              negamaxi@gmail.com
            </p>
            <hr />
            <p className="w3-large">
              <b><i className="fa fa-asterisk fa-fw w3-margin-right color1" />Skills</b>
            </p>
            <Skills />
            <br />
            <p className="w3-large w3-text-theme">
              <b><i className="fa fa-globe fa-fw w3-margin-right color1" />Languages</b>
            </p>
            <p>Russian</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge background2" style={{height: 24, width: '100%'}} />
            </div>
            <p>English</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge background2" style={{height: 24, width: '55%'}} />
            </div>
            <br />
          </div>
        </div><br />
        {/* End Left Column */}
      </div>
      {/* Right Column */}
      <div className="w3-twothird">
        <Experience />
        <div className="w3-container w3-card w3-white">
          <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge color1" />Education</h2>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>Self-education</b></h5>
            <h6 className="color1"><i className="fa fa-calendar fa-fw w3-margin-right" />2014 - present</h6>
            <p>Almost all my programming skills come from on a day-to-day basis practicing.</p>
            <hr />
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity"><b>Belarusian State University</b></h5>
            <h6 className="color1"><i className="fa fa-calendar fa-fw w3-margin-right" />2009 - 2016</h6>
            <p>Web-journalist</p>
            <hr />
          </div>
        </div>
        {/* End Right Column */}
      </div>
      {/* End Grid */}
    </div>
    {/* End Page Container */}
  </div>
  <footer className="w3-container background1 w3-center w3-margin-top">
    <p>Find me on social media.</p>
    <a href='https://twitter.com/MaxiThat'>
      <i className="fa fa-twitter w3-hover-opacity" />
    </a>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
  </footer>
</div>
    );
  }
}

export default App;
