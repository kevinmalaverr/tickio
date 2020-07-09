import React from 'react'
import './LayoutDashboard.scss'
import {Switch, Route} from 'react-router-dom'
import {Dashboard} from 'pages'
import {Home} from 'pages'
import MenuDashboard from './MenuDashboard'
import HeaderDashboard from './HeaderDashboard'

const LayoutDashboard = (props) => {

  const compare = () =>{
    return (props.history.location.pathname === '/dashboard')
  }

  return (
    <div className="LayoutDashboard">
      { compare()
        ? <div></div>
        : <MenuDashboard/>
      }

      <div className="content">
        <HeaderDashboard history={props.history}/>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/:id/' component={Home} />
          <Route exact path='/dashboard/:id/' component={Home} />
        </Switch>
        <footer className="footer-dashboard">
          <p>created by <a target="blank" href="https://kevinmalaver.work">kevin</a></p>
        </footer>
      </div>
    </div>


  )
}

export default LayoutDashboard
