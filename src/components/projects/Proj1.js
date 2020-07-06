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
      <a href="https://a-der.github.io/sei-project-1/" target="_blank">
        <button className='goto-buttons'>Go To Live Site</button>
      </a><br></br>

      <p className="about-proj"><strong>About: </strong>This was my first project I did at General Assembly for the Software Immersive Course, built in 8 days, and also my first ever game I have built and real-life practice of the skills we had been practicing for only a month. It was eye opening to see how a game could be put together using a single page of javaScript.<br></br><br></br>
        <strong>Brief overview:</strong> The key methods I employed for this game were removing and adding CSS images to mimick the behaviour of the characters moving. Where they moved was dependant where they were. The shooter had a single row to move along and the army had much more space. I defined the edges of the board using 2 separate arrays of the indexes of the divs on the left and right edge.

      Shooting from both the shooter and army were handled using timers and the same removing and adding of a CSS image.
      </p>
      <a href="https://github.com/A-Der/sei-project-1" target="_blank">
        <button className='goto-buttons'>See Full Read Me</button>
      </a><br></br>

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