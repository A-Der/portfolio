import React from 'react'
// import { Link } from 'react'
import linkedInLogo from '../styles/assets/linkedin.png'
// import githubLogo from '../styles/assets/github.png'

const Contact = () => {
  return (
    <div className="contact">
      <h1>get in touch</h1>
      <h3>For jobs, questions, complements as well as insults and/or death threats*</h3>
      <h5>* I may or may not look forward to hearing from you</h5>
      <div>
        <a href='https://www.linkedin.com/in/aderamchi/'>
          <img className="linkedin-logo" src={linkedInLogo} alt="linkedin logo"/>
        </a>
        <a href='https://github.com/A-Der/'>
          <div className="github-logo"/>
        </a>
      </div>
     
      at.deramchi@gmail.com
    </div>
  )
}

export default Contact