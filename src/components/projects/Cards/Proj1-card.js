import React from 'react'
import Modal from 'react-modal'

import Proj1 from '../Proj1'


function Proj1Card() {
  const [isOpen, setIsOpen] = React.useState(false)

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
        isOpen={isOpen}>
        <Proj1 />
      </Modal>
    </>
  )
}

export default Proj1Card