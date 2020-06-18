import React from 'react'
// import { Link } from 'react'
import linkedInLogo from '../styles/assets/linkedin.png'
import githubLogo from '../styles/assets/github.png'

const Contact = () => {
  return (
    <>
      <h1>contact me</h1>
      <img className="linkedin-logo" src={linkedInLogo} alt="linkedin logo"/>
      

      <img className="github-logo" src={githubLogo} alt="github logo"/>
    </>
  )
}

export default Contact