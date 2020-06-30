import React from 'react'
// import { Link } from 'react'
import linkedInLogo from '../styles/assets/linkedin.png'
import githubLogo from '../styles/assets/github.png'
import githubInvertedLogo from '../styles/assets/github-inverted.png'

const Contact = ({ theme }) => {
  return (
    <div className="contact">
      <h1>get in touch</h1>
      <h3>For jobs, questions, complements as well as insults and/or death threats*</h3>
      <h5>* I may or may not look forward to hearing from you</h5>
      <div>
        <div className='logos'>
          <a href='https://www.linkedin.com/in/aderamchi/'>
            <img className="linkedin-logo" src={linkedInLogo} alt="linkedin-logo"/>
          </a>
          <a href='https://github.com/A-Der/'>
            <img className="github-logo" src={theme === 'theme--light' ? githubLogo : githubInvertedLogo} alt="github-logo"/>
          </a>
        </div>
        
      </div>
      <div className='email'>
at.deramchi@gmail.com
      </div>
      
    </div>
  )
}

export default Contact