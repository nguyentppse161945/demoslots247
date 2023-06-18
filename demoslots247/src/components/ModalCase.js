import React from 'react'

const ModalCase = ({setIsOpen}) => {
  return (
    <div className='modal-show' onClick={() => setIsOpen(false)}>
      <div id='modal1' className='modal' style={{display: 'block', top: '35%'}}>
        <div className='modal-content'>
            <h4>Video for</h4>
            <p></p>
        </div>
        <div className='modal-footer'>
            <a className='modal-close red-text'>Close</a>
        </div>
      </div>
    </div>
  )
}

export default ModalCase