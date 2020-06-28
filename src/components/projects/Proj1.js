import React from 'react'

import clip1 from '../../styles/assets/proj1-clip.mov'

const Proj1 = () => {
  return (
    <div className="proj-modal">
      <h1>
        Rick and Morty® Space Invaders
      </h1>
      <div className="clip-box">
        <video autoPlay>
          <source src={clip1} type="video/mp4"/>
        </video>
      </div>
      <p className="about-proj">This was my first project I did at General Assembly for the Software Immersive Course, built in 8 days, and also my first ever game I have built and real-life practice of the skills we had been practicing for only a month. It was eye opening to see how a game could be put together using a single page of javaScript.
      </p>
      <div style={{ height: '1em', width: '75%' }}>
        <hr></hr>
      </div>
      

      <ul className="tech-list">
        <li>Vanilla JavaScript</li>
        <li>CSS</li>
        <li>HTML with Audio</li>
        <li>GitHub Pages</li>
      </ul>
    </div>
  )
}

export default Proj1