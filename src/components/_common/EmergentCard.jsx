import React from 'react'

const EmergentCard = ({active, className, children}) => {
  return (
    <div className={`EmergentCard shadow ${className} ${active?'active':''}`}>
      {children}
    </div>
  )
}

export default EmergentCard
