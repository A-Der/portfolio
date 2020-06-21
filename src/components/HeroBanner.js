import React from 'react'

const HeroBanner = () => {
  return (
    <>
      <div className="hero">
        <div className="left-side">
        </div>
        <div className="right-side">
            Assia Deramchi <em>(Ah-See-Ya)</em><br></br>
            Junior Full Stack Web Developer
          <hr></hr>
            Im proper half decent I swear.
        </div>
      </div>
      <div className="about">
        <hr></hr>
        <p>Hi, Im Assia,
            Im a junior full stack software engineer and recent graduate from General Assembly. In my spare time you can find me blitzing up new smoothie recipes or in my roller skates.</p>

        <h4>Front End:</h4>
        <p>HTML, CSS, SCSS/SASS, Flexbox, Bulma, Bootstrap, JavaScript, React, Hooks, JSON</p>

        <h4>Back end:</h4>
        <p>Express, Node.js, Mongoose, MongoDB, Python, Django</p>

        <h4>Pckage managers:</h4>
        <p>Yarn, Npm, Pip, Pipenv</p>

        <h4>Methodologies</h4>
        <p>Mobile first web design, Responsive web design, Pair Coding, Group Coding, RESTful web services, CRUD services</p>
        <hr></hr>
      </div>
    </>
  )
}

export default HeroBanner