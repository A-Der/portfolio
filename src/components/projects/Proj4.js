import React from 'react'

import clip4 from '../../styles/assets/proj4-clip.mov'

const Proj4 = () => {
  return (
    <div className="proj-modal">
      <h1>EVENTR</h1>
      <div className="clip-box">
        <video autoPlay>
          <source src={clip4} type="video/mp4"/>
        </video>
      </div>
      <a href="https://eventr-django-ga.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <button className='goto-buttons'>Go To Live Site</button>
      </a><br></br>
      <p className="about-proj">
        <strong>About: </strong>We created an app akin to EventBrite; buying tickets and retrieving tickets for talks. Though we wanted to set it apart from EventBrite and put our own unique feature on it. We added the possibility of creating polls for talks, if you are the creator of that talk, to gather instant responses from your audience.<br></br>
      
        <strong>Brief Overview: </strong>
      
      My team from project 3 decided to work again on this project following the successful productivity we had. Where as our full stack app before was written in React JS and using MongoDB, we were now tasked with doing another full stack app this time using Python and DJango in the backend, React/ React Hooks in the front end. We wanted to create something that would be a level above what we achieved before, and doing this while building it with Python and Django, which we had only learned for a week, was a fun challenge.
      </p>
      <a href="hhttps://github.com/A-Der/ga-final-project" target="_blank" rel="noopener noreferrer">
        <button className='goto-buttons'>See Full Read Me</button>
      </a><br></br>
      <div style={{ height: '1em', width: '75%' }}>
        <hr></hr>
      </div>
      <ul className="tech-list">
        <li>Python</li>
        <li>React Hooks</li>
        <li>Django rest framework</li>
        <li>Pip</li>
        <li>Pipenv</li>
        <li>Heroku</li>
        <li>Mobile first web design</li>
      </ul>
    </div>
  )
}

export default Proj4