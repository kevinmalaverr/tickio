import React from 'react'
import { Link } from 'react-router-dom'
import { logo_negative } from 'images'

const MenuDashboard = () => {

  const handleMenu = () => {
    document.getElementById('menuDashboard').classList.toggle('active')
  }

  return (
    <div id="menuDashboard" className="nav">
      <div className="menu-container">
        <div className="menu-header">
          <div className="menu-logo">
            <Link><img className="image" src={logo_negative} alt=""/></Link>
          </div>
        </div>
        <div className="menu-nav-container" data-simplebar>
          {//nav
          }
        </div>
      </div>
      <div className="over-dashboard" onClick={handleMenu}></div>
    </div> 
  )
}

export default MenuDashboard
