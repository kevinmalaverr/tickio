import React from 'react'
import './LayoutDashboard.scss'
import {Switch, Route} from 'react-router-dom'
import {Dashboard} from 'pages'
import {Home} from 'pages'

const LayoutDashboard = () => {

  const handleMenu = () => {
    document.getElementById('menuDashboard').classList.toggle('active')
  }

  return (
    <div className="LayoutDashboard">
      <div id="menuDashboard" className="nav">
        <div className="menu-container">
          <h2>hola</h2>
          <i className="icon-cancel"/>
        </div>
        <div className="over-dashboard" onClick={handleMenu}></div>
      </div>
      
      <div className="content">
        <div className="header">
          <button onClick={handleMenu}>boton</button>
        </div>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/:id/' component={Home} />
          <Route exact path='/dashboard/:id/' component={Home} />
        </Switch>
      </div>
    </div>
  )
}

export default LayoutDashboard
