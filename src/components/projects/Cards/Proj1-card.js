import React, { useState } from 'react'
import Modal from 'react-modal'

import Proj1 from '../Proj1'


function Proj1Card() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalStyle] = React.useState({
    content: {
  
      border: '1px solid rgb(204, 204, 204)',
      background: '#555555',
      color: '#fafafa',
      borderRadius: '20px',
      padding: '20px'
    }
  })

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="proj1" onClick={handleModal}>
        <div className="proj1-image" />
        <p>Rick and Morty® Space Invaders</p>
      </div>
      <Modal
        ariaHideApp={false}
        onRequestClose={handleModal}
        isOpen={isOpen}
        style={modalStyle}>
        <Proj1 />
      </Modal>
    </>
  )
}

export default Proj1Card