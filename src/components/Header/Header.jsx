import React from "react";
import './Header.scss'
import { Link } from 'react-router-dom'
import {logo_negative} from 'images'
import { Menu } from 'components'
import { Button } from 'components/_common'


const Header = ({uName}) => {
 
  return(
    <header>
      <div className="header__container">
        <Link to="/">
          <img src={logo_negative} alt=""/>
        </Link>
        <div className="menu-container">
          <Menu>
            <li>Plans</li>
            <li>About</li>
          </Menu>
          <div className="buttons">
            {uName
              ? <span>hi, {uName}</span>
              : <Link to="/login"><Button color="white">Go to Dashboard</Button></Link>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header