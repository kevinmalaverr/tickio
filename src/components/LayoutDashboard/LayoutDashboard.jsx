import React from 'react'
import { Link } from 'react-router-dom'
import './LayoutDashboard.scss'
import {Switch, Route} from 'react-router-dom'
import {Dashboard} from 'pages'
import {Home} from 'pages'
import { ProfilePhoto } from 'components/_common'
import { logo_negative } from 'images'

const LayoutDashboard = () => {

  const handleMenu = () => {
    document.getElementById('menuDashboard').classList.toggle('active')
  }

  return (
    <div className="LayoutDashboard">
      <div id="menuDashboard" className="nav">
        <div className="menu-container">
          <div className="menu-header">
            <div className="menu-logo">
              <Link><img className="image" src={logo_negative} alt=""/></Link>
            </div>
          </div>
          <div className="menu-nav-container" data-simplebar>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
            <h1>fdfd</h1>
          </div>
          <h2>hola</h2>
          <i className="icon-cancel"/>
        </div>
        <div className="over-dashboard" onClick={handleMenu}></div>
      </div>
      
      <div className="content">
        <div className="dashboard__header gradient shadow">
          <div className="left">
            <button onClick={handleMenu} className="btn-container margin-r100 large">
              <i className="icon-menu"></i>
            </button>
          </div>
          <div className="middle">

          </div>
          <div className="right">
            <button className="btn-container margin-r100 large">
              <i className="icon-bell"></i>
            </button>
            <ProfilePhoto image="https://lh3.googleusercontent.com/ogw/ADGmqu_b6BOzJY53OJ9W2V6CmpkV_4gcSGQ-H5lV7MFU=s32-c-mo"/>
          </div>
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
