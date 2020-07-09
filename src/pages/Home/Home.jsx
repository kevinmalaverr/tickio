import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './Home.scss'
import { Header } from 'components'
import { Footer } from 'components'
import { Button } from 'components/_common'
import { dibujo } from 'images'
import Autentication from 'utils/auth/autentication'

const Home = props => {
  
  let [name, setName] = useState(null)
  const auth = Autentication.getInstance()


  useEffect(() => {
    auth.listen((user)=>{
      if(user){
        setName(user.displayName)
      }
    })
    
    return ()=>{
      setName(null)
    }
  }, [])

  return(
  <>
    <Helmet>
      <title>titulo inicio</title>
    </Helmet>
    
    <div className="home">
      <div className="landing">
        <Header uName={name}></Header>
        <div className="hero">
          <div className="hero-container">
            <div>
              <div className="hero-title margin-b200">
                <h1 className="headline">The easiest way to reserve for your events</h1>
              </div>
              <div className="hero-description margin-b200">
                <p className="title"> 
                  - create forms for your events <br/>
                  - generate custom tickets <br/>
                  - another feature
                </p>
              </div>
              <div className="hero-button">
                <Button color="white">Start now</Button>
              </div>
            </div>
            <div className="hero-image">
             <img  src={dibujo} alt=""/>
            </div>
          </div>
        </div>
        <div className="diagonal"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none" fill="white"><polygon points="100 0 100 10 0 10"></polygon></svg></div>
      </div>
    </div>
    <button className="btn">Login</button>
    <button className="btn btn-out">Login</button>
    <button className="btn" disabled>Login</button>
    <button className="btn btn-out" disabled>Login</button>
    <input className="checkbox" type='checkbox' name='edad' value='20-39' />
    <Footer></Footer>

    <p className="light">textooo</p>
  </>
)}

export default Home

