import React from 'react'
import Modal from 'react-modal'

import Proj3 from '../Proj3'


const Proj3Card = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [modalStyle] = React.useState(props)

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="proj3" onClick={handleModal}>
        <div className="proj3-image" />
        <p>Roadtrippers</p>
      </div>
      <Modal
        ariaHideApp={false}
        onRequestClose={handleModal}
        isOpen={isOpen}
        style={modalStyle}>
        <Proj3 />
      </Modal>
    </>
  )
}

export default Proj3Card