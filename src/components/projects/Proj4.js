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
      <p className="about-proj">
        <strong>About: </strong>We created an app akin to EventBrite, buying tickets and retiriving tickets. However with the added possibility of creating polls for talks you are the owner of to gather instant responses from your audience.<br></br>
      
        <strong>Brief Overview: </strong>
      
      My team from project 3 decided to work again on this project following the successful productivity we had. Where as our full stack app before was written in React JS and using MongoDB, we were now tasked with doing another full stack app this time using Python and DJango in the backend, React/ React Hooks in the front end. We wanted to create something that would be a level above what we achieved before, and doing this while building it with Python and Django, which we had only learned for a week, was a fun challenge.
      </p>
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