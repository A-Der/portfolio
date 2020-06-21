import React from 'react'
import Modal from 'react-modal'

import Proj2 from '../Proj2'


function Proj2Card() {
  const [isOpen, setIsOpen] = React.useState(false)

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
        isOpen={isOpen}>
        <Proj2 />
      </Modal>
    </>
  )
}

export default Proj2Card