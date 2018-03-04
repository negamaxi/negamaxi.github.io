import React from 'react'

const Unit = ({ title, from, till, description, link, github }) => (
  <div className="w3-container">
    <h5 className="w3-opacity"><b>{title}</b></h5>
    <h6 className="color1">
      <i className="fa fa-calendar fa-fw w3-margin-right" />
      {from} - {till || (<small className="w3-tag background1 w3-round uppercase">present</small>)}
    </h6>
    <p>{description}</p>
    {
      link && (
        <a href={link}>
          <i className="fa fa-globe fa-fw w3-margin-right"/>Site
        </a>
      )
    }
    {
      github && (
        <a className='margin-left-30' href={github}>
          <i className="fa fa-github fa-fw w3-margin-right" />GitHub
        </a>
      )
    }
    <hr />
  </div>
)

const data = [
  {
    title: 'Full Stack Developer / pathephone.github.io',
    from: 'Nov 2017',
    description: "Experimental desktop music player written in Electron. It's able to stream music in a completly distributed, serverless manner thanks to IPFS - modern hypermedia protocol.",
    link: 'https://pathephone.github.io',
    github: 'https://github.com/pathephone/pathephone-desktop'
  },
  /*
  {
    title: 'Nodejs developer / metabin.space',
    from: 'Sep 2017',
    link: 'http://metabin.space',
    github: 'https://github.com/metabin/metabin',
    description: "A meta-project for IPFS-based applications and tools."
  },
  */
  {
    title: 'Full Stack Developer / hunter.com.by',
    from: 'Dec 2017',
    till: 'Feb 2018',
    link: 'https://hunter.com.by',
    description: "It's a modern web-site created for the official Hunter Engineering Company representative in Belarus. Written in Next.js - React-based framework with a SSR support."
  },
  {
    title: 'Front End Developer / vsteams.org',
    from: 'Jan 2014',
    till: 'Oct 2016',
    link: 'https://vsteams.org',
    description: "E-sport tournaments platform written in React with a WebSocket communication layer."
  }
]

export default () => (
  <div className="w3-container w3-card w3-white w3-margin-bottom">
    <h2 className="w3-text-grey w3-padding-16">
      <i className="fa fa-code fa-fw w3-margin-right w3-xxlarge color1" />Work Experience
    </h2>
    {
      data.map(Unit)
    }
  </div>
)