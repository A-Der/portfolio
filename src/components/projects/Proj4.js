import React from 'react'

// import clip4 from '../../styles/assets/proj4-clip.mov'

const Proj4 = () => {
  return (
    <div className="proj-modal">
      <h1>EVENTR</h1>
      <div className="clip-box">
        {/* <video autoPlay>
          <source src={clip4} type="video/mp4"/>
        </video> */}
      </div>
      <p>
          For this group coded app we implemented the use of Python and Django for our backend and React Hooks for our frontend. We created an app akint to EventBrite, buying tickets and retiriving tickets. However with the added possibility of creating polls for talks you are the owner of to gather instant responses from your audience.
      </p>
      <ul>
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