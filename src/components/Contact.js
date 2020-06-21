import React from 'react'
// import { Link } from 'react'
import linkedInLogo from '../styles/assets/linkedin.png'
// import githubLogo from '../styles/assets/github.png'

const Contact = () => {
  return (
    <div className="contact">
      <h1>get in touch</h1>
      <div>
        <a href='https://www.linkedin.com/in/aderamchi/'>
          <img className="linkedin-logo" src={linkedInLogo} alt="linkedin logo"/>
        </a>
        <a href='https://github.com/A-Der/'>
          <img className="github-logo"  alt="github logo"/>
        </a>
      </div>
     
      at.deramchi@gmail.com
    </div>
  )
}

export default Contact