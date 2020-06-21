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
      <p>
          This was a group based project, we implemented the use of Mongo for our backend database to create a site where you can search for road trips all around the world using different filters / tags. Users can also post routes, add friends and send private messages to each other.
      </p>
      <ul>
        <li>React JS</li>
        <li>Mongoose</li>
        <li>Bcrypt</li>
        <li>Body-Parser</li>
        <li>Express</li>
        <li>Jsonwebtoken</li>
        <li>Cloudinary</li>
      </ul>
    </div>
  )
}

export default Proj3