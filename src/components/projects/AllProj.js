/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'

import Proj1Card from './Cards/Proj1-card'
import Proj2Card from './Cards/Proj2-card'
import Proj3Card from './Cards/Proj3-card'
import Proj4Card from './Cards/Proj4-card'


function AllProj() {

  return (
    <>
      <div className="proj-box">
        <h1 className="projs-title"><span className="slashes">//</span> Evidence</h1>
        <div className="projs-wrapper">
          <Proj1Card/>
          <Proj2Card/>
          <Proj3Card/>
          <Proj4Card/>
        </div>
      </div>
    </>
  )
}
export default AllProj