import React from 'react'
import Modal from 'react-modal'

import Proj2 from '../Proj2'


function Proj2Card() {
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
      <div className="proj2" onClick={handleModal}>
        <div className="proj2-image" />
        <p>The NASA Archives</p>
      </div>
      <Modal
        ariaHideApp={false}
        onRequestClose={handleModal}
        isOpen={isOpen}
        style={modalStyle}>
        <Proj2 />
      </Modal>
    </>
  )
}

export default Proj2Card