/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import Proj1Card from './Cards/Proj1-card'
import Proj2Card from './Cards/Proj2-card'
import Proj3Card from './Cards/Proj3-card'
import Proj4Card from './Cards/Proj4-card'


function AllProj(props) {
  // const [theme] = React.useState(props)
  // const backgroundColor = theme.theme === 'theme--dark' ? '#373d3f' : 'white'
  const [modalStyle] = React.useState({
    content: {
      border: '1px solid rgb(204, 204, 204)',
      background: '#373d3f',
      color: '#fafafa',
      borderRadius: '15px',
      padding: '20px',
      fontSize: '1.5em'
    }
  })
  // console.log(backgroundColor)
  // console.log(theme)
  return (
    <>
      <div className="proj-box">
        <h1 className="projs-title"><span className="slashes">//</span> Evidence</h1><h4 className="projs-subtitle">- And when my mortal body crumbles and returns to dust may I be remembered for my commercially fruitful endeavours.</h4>
        <div className="projs-wrapper">
          <Proj1Card
            {...modalStyle}/>
          <Proj2Card
            {...modalStyle}/>
          <Proj3Card
            {...modalStyle}/>
          <Proj4Card
            {...modalStyle}/>
        </div>
      </div>
    </>
  )
}
export default AllProj