import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'

const $modalRoot = document.getElementById('modal-root')

const Modal = (props) => {

  let el = document.createElement('div')
  el.classList.add('Modal')
  const $cont = document.createElement('div')
  $cont.classList.add('Modal-container')
  const $bg = document.createElement('div')
  $bg.classList.add('Modal-background')
  el.appendChild($cont)
  el.appendChild($bg)

  useEffect(() => {
    $modalRoot.appendChild(el)

    return () => {
      $modalRoot.removeChild(el)
    }
  })

  return ReactDOM.createPortal(
    props.children,
    $cont
  )
}

export default Modal
