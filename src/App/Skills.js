import React from 'react'

const Skill = ({ title, percent }) => (
  <div>
    <p>{title}</p>
    <div className="w3-light-grey w3-round-xlarge w3-small">
      <div className="w3-container w3-center w3-round-xlarge background2" style={{ width: percent }}>{percent}</div>
    </div>
  </div>
)

const data = [
  {
    title: 'JavaScript',
    percent: '90%'
  },
  {
    title: 'React.js (JSX)',
    percent: '80%'
  },
  {
    title: 'Node.js',
    percent: '75%'
  },
  {
    title: 'HTML + CSS',
    percent: '65%'
  },
  {
    title: 'Electron',
    percent: '60%'
  },
  {
    title: 'Vue.js',
    percent: '45%'
  }
]

export default () => (
  <div>
    {
      data.map(Skill)
    }
  </div>
)