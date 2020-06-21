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
      <p>
        This site is a pair-coded using NASA's public API's. We used the API's to GET & POST to display varied content to the viewer and ability to search NASA's database.

        This was our first time using API's in an independent project and I really enjoyed looking through what was returned to inspire ideas for pages on our site.
      </p>
      <ul>
        <li>React JS</li>
        <li>Axios</li>
        <li>Bulma</li>
        <li>Netlify</li>
      </ul>
    </div>
  )
}

export default Proj2