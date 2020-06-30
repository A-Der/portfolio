import React from 'react'
import Modal from 'react-modal'

import Proj4 from '../Proj4'


const Proj4Card = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modalStyle] = React.useState(props)

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="proj4" onClick={handleModal}>
        <div className="proj4-image" />
        <p>EVENTR - Talks that Talk back</p>
      </div>
      <Modal
        ariaHideApp={false}
        onRequestClose={handleModal}
        isOpen={isOpen}
        style={modalStyle}>
        <Proj4 />
      </Modal>
    </>
  )
}

export default Proj4Card