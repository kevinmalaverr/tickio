import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const $modalRoot = document.getElementById('modal-root')

const Modal = (props) => {

  let el = document.createElement('div')
  el.classList.add('Modal')
  el.appendChild(document.createElement('div', {id:'modalContainer'}))

  useEffect(() => {
    $modalRoot.appendChild(el)

    return () => {
      $modalRoot.removeChild(el)
    }
  })

  return ReactDOM.createPortal(
    props.children,
    el
  )
}

export default Modal
