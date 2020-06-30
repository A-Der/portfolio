/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import clip2 from '../../styles/assets/proj2-clip.mov'

const Proj2 = () => {
  return (
    <div className="proj-modal">
      <h1>The NASA Archives</h1>
      <div className="clip-box">
        <video autoPlay>
          <source src={clip2} type="video/mp4"/>
        </video>
      </div>
      <a href="https://nasa-archives.netlify.app/">
        <button className='goto-buttons'>Go To Live Site</button>
      </a><br></br>
      <p className="about-proj">
        <strong>About: </strong>This site is pair-coded using NASA's public API's. We used the RESTful API's to GET & POST to display varied content to the viewer and ability to search NASA's database.<br></br><br></br>

        <strong>Brief Overview: </strong>This was my first time using API's in an independent project and I really enjoyed looking through what was returned to inspire ideas for pages on our site.<br></br>
        Finding such an interesting API with many ways to GET different collections of images/information was both a win and also a challenge. There was lots of information work with but it also meant the requests could be a little more complicated than other API's. Most notably the project search and display. As the inital request for the projects only returned their date and ID, we had to take the ID upon selecting and fire off a new GET request using that ID. The user-end process is seemless and I am pleased with the outcome.
 
      </p>
      <a href="https://github.com/A-Der/sei-project-2">
        <button className='goto-buttons'>See Full Read Me</button>
      </a><br></br>
      <div style={{ height: '1em', width: '75%' }}>
        <hr></hr>
      </div>
      <ul className="tech-list">
        <li>React JS</li>
        <li>Node JS</li>
        <li>AJAX</li>
        <li>Express</li>
        <li>Axios</li>
        <li>Insomnia</li>
        <li>SASS</li>
        <li>Bulma</li>
        <li>HitHub</li>
        <li>Netlify</li>
      </ul>
    </div>
  )
}

export default Proj2