import React from 'react'
import EmergentCard from './EmergentCard'
import { useState } from 'react'

const ProfilePhoto = props => {
  const {image, userName, email} = props
  const [sign, setSign] = useState(false)

  const handleClick = () => {
    console.log('click')
    setSign(sign ? false : true)
  }

  return (
    <>
    <div className="ProfilePhoto"
      on
      onClick={handleClick}>
      <img src={image} alt=""/>
      <EmergentCard active={sign}>
        
        <img src={image} alt=""/>
        <h1>hoñla</h1>
      </EmergentCard>
    </div>
    </>
  )
}

export default ProfilePhoto
