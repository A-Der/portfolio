/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

const HeroBanner = () => {
  return (
    <>
      <div className="hero">
        <div className="left-side">
        </div>
        <div className="right-side">
          
          <div className="title-box">
            <div className="title-left"><span className="slashes">//</span></div>
            <div className="title-right">
              <p className="title">Assia Deramchi <em>(Ah-See-Ya)</em><br></br>
                 Junior Full Stack Web Developer</p>
            </div>
            
          </div>
          
          <hr></hr>
          <p className="sub-title">I'm proper half decent I swear.</p>
        </div>
      </div>
      <div className="about">
        <div className="left-side">
          <h1><span className="slashes">//</span> Info</h1>
          <p>Recently completing the Fully Immersive Software Engineering course with General Assembly® I'm looking for my first permanent role in the industry.<br></br>
        Having worked in varied environments in the past 10 years, I look to bring my own unique experience to a team and become a valuable contributor.<br></br>
        In my spare time you can find me rollerskating or reading books; both of which influences my creativity for writing poetry and abstract pieces.
          </p>
        </div>
        
        <div className="right-side">
          <h1><span className="slashes">//</span> Technologies</h1>
          <h4>Front End:</h4>
          <p>HTML, CSS, SCSS/SASS, Flexbox, Bulma, Bootstrap, JavaScript, PostgreSQL React, Hooks, JSON, Slack, VS code, Trello, Balsamiq</p>

          <h4>Back end:</h4>
          <p>Express, Node.js, Mongoose, MongoDB, Python, Django</p>

          <h4>Tools:</h4>
          <p>Insomnia, Robo 3T, TablePlus, Chrome Dev Tools, APIs, Technical Communication, Sense of Humour</p>

          <h4>Package managers:</h4>
          <p>Yarn, Npm, Pip, Pipenv</p>

          <h4>Methodologies</h4>
          <p>Mobile first web design, Responsive web design, Pair Coding, Group Coding, RESTful web services, CRUD services</p>
        </div>
        
      </div>
    </>
  )
}

export default HeroBanner