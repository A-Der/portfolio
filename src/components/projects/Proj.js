import React from 'react'
import { Link } from 'react-router-dom'


const Proj = () => {
  return (
    <>
      <div className="about">
        <code>
          <hr></hr>
Hi, Im Assia,
Im a junior full stack software engineer and recent graduate from General Assembly. In my spare time you can find me blitzing up new smoothie recipes or in my roller skates.
          <hr></hr>
        </code>
      </div>
      {/* <div className="pattern"></div> */}

      <div className="projs-wrapper">
        <Link to='/project1'>
          <div className="proj">
            <div className="proj1-image" />
            <p>Rick and Morty Space Invaders</p>
          </div>
        </Link>
        <Link to='/project2'>
          <div className="proj">
            <div className="proj2-image" />
            <p>The NASA Archives</p>
          </div>
        </Link>
        <Link to='/project3'>
          <div className="proj">
            <div className="proj3-image" />
            <p>Roadtrippers</p>
          </div>
        </Link>
        <Link to="/project4">
          <div className="proj">
            <div className="proj4-image" />
            <p>EVENTR - Talks that Talk back</p>
          </div>
        </Link>
      </div>
      <div className="pattern"></div>
    </>
  )
}
export default Proj