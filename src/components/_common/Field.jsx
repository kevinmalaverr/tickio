import React, { Children } from 'react'
import { useState } from 'react'

const Field = (props) => {

  const {id, type, error, placeHolder, defaultValue, handle, children} = props

  const handleChange = event =>{
    if(handle){
      handle(event.target.value, id)
    }
  }

  return (
    <div className="field-container">
      <div className="field shadow">
      {children 
        ? <div className="field__icon">
          {children}
        </div>
        : null
      }
      
      <input type={type} placeholder={placeHolder}/>
      <i className="material-icons">error</i>
    </div>
    {/* <div className="error-message f-small">
      Invalid email
    </div> */}
  </div>
    
  )
}

export default Field
