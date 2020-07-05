import React from 'react'
import './Menu.scss'

const Menu = ({children}) => {

  const handleOpen = ()=>{
    document.getElementById('menu').classList.add('active')
    document.getElementById('menu-back').classList.add('active')
  }

  const handleClose = ()=>{
    document.getElementById('menu').classList.remove('active')
    document.getElementById('menu-back').classList.remove('active')
  }

  return (
    <>
      <div id="menu-back" className="menu-back" onClick={handleClose}/>
      <button className="menu-icon" onClick={handleOpen}>
        <i class="icon-menu"/>  
      </button>
      <div id="menu" className="menu">
        <div className="menu__head">
          <button className="menu__close" onClick={handleClose}>
            <i class="icon-cancel"/>                 
          </button>
        </div>      
        <nav>
          <ul>
            {children}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu
