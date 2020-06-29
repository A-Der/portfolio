import React from 'react'
import Modal from 'react-modal'

import Proj3 from '../Proj3'


function Proj3Card() {
  const [isOpen, setIsOpen] = React.useState(false)
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