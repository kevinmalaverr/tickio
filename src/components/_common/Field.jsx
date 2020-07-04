import React from 'react'
import { useState } from 'react'

const Field = (props) => {

  const {id, type, error, placeHolder, defaultValue, handle} = props

  const handleChange = event =>{
    handle(event.target.value, id)
  }

  return (
    <div className="field">
      <div className={`input-container ${error ? 'error' : ''}`}>
        <input id="email" type={type} placeholder={placeHolder} value={defaultValue} onChange={handleChange}/>
        {error 
        ? <span className="error-icon">x</span> 
        : null}
      </div>
      <p className='error-message'>{error}</p>
    </div>
  )
}

export default Field
