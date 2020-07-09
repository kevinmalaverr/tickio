import React from 'react'
import { Link } from 'react-router-dom'
import { ProfilePhoto } from 'components/_common'
import { logo } from 'images'

const HeaderDashboard = (props) => {

  const compare = () =>{
    return (props.history.location.pathname === '/dashboard')
  }

  const handleMenu = () => {
    document.getElementById('menuDashboard').classList.toggle('active')
  }

  return (
    <div className="dashboard__header shadow">

      <div className="left">{
        compare()
          ? <Link to="/dashboard"><img className="image-logo" src={logo}></img></Link>
          : <button onClick={handleMenu} className="btn-container margin-r100 large">
              <i className="material-icons">menu</i>
            </button>
          }
      </div>

      <div className="middle">

      </div>

      <div className="right">
        <button className="btn-container margin-r100 large">
          <i className="material-icons">notifications</i>
        </button>
        <ProfilePhoto image="https://lh3.googleusercontent.com/ogw/ADGmqu_b6BOzJY53OJ9W2V6CmpkV_4gcSGQ-H5lV7MFU=s32-c-mo"/>
        <p className="f-small w-light margin-l100">Nombre Apellido</p>
      </div>

    </div>
  )
}

export default HeaderDashboard
