import React from 'react'

import clip3 from '../../styles/assets/proj3-clip.mov'

const Proj3 = () => {
  return (
    <div className="proj-modal">
      <h1>RoadTrippers</h1>
      <div className="clip-box">
        <video autoPlay>
          <source src={clip3} type="video/mp4"/>
        </video>
      </div>
      <p className="about-proj">
        <strong>About: </strong>Working in a group this was our first time putting together a full stack app. We brainstormed and pooled our ideas, brainstorming aloud, picking out parts of ideas we liked until something was unintentionally born that everyone had contributed to. No one person thought of it yet we all have a share of it. <br></br><br></br>

        <strong>Brief Overview: </strong>We implemented the use of Mongo for our backend database to create a site where you can search for road trips all around the world using different filters / tags. Users can also post routes, add friends and send private messages to each other.
        Using React JS on the front end I made a detailed and multi-functioning profile and profile edit pages. With my group we worked on different parts of the website while still communicating our procedure. This was especially necessary as our work obviously overlapped and will effect the others part they are working on.

      </p>
      <div style={{ height: '1em', width: '75%' }}>
        <hr></hr>
      </div>
      <ul className="tech-list">
        <li>React JS</li>
        <li>Node Js</li>
        <li>Mongoose</li>
        <li>MongoDB</li>
        <li>Mongoose-unique-validator</li>
        <li>Bcrypt</li>
        <li>Body-Parser</li>
        <li>Express</li>
        <li>Jsonwebtoken</li>
        <li>Cloudinary</li>
        <li>SASS</li>
        <li>HTTP-proxy-middleware</li>
        <li>Axios</li>
        <li>Node-sass</li>
        <li>React-modal</li>
        <li>React-tooltip</li>
        <li>React-router-dom</li>
        <li>React-responsive-carousel</li>
        <li>Insomnnia</li>
        <li>Balsamiq</li>
        <li>Heroku</li>
      </ul>
    </div>
  )
}

export default Proj3