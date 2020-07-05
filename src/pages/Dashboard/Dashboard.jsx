import React from 'react'
import './Dashboard.scss'
import { EventCard } from 'components'
import { ProfilePhoto } from 'components/_common'

const Dashboard = () => {

  const list = [0,1,2,3,4,5]

  return (
    <div>
      <div className="container">
        <h1>Your Events</h1>
        <div className="event-list">
          {list.map((item)=>{
            return(
              <EventCard/>
            )
          })}
      </div>
      </div>
    </div>
  )
}

export default Dashboard
