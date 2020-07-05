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
    </div>
    <EmergentCard className="b-radius" active={sign}/>
    </>
  )
}

export default ProfilePhoto
