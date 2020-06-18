import React from 'react'
import Proj from './projects/Proj'
import Contact from './Contact'

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="left-side">
        </div>
        <div className="right-side">
          <code>
            Assia Deramchi <em>(Ah-See-Ya)</em><br></br>
            Junior Full Stack Web Developer
            <hr></hr>
            Hire me please, Im proper half decent I swear.
          </code>
        </div>
      </div>
      <Proj/>
      <Contact/>
    </>
  )
}

export default Home