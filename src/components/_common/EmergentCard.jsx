import React from 'react'

const EmergentCard = ({active, className}) => {
  return (
    <div className={`EmergentCard shadow ${className} ${active?'active':''}`}>
      
    </div>
  )
}

export default EmergentCard
