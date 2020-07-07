import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Dashboard.scss'
import { EventCard } from 'components'
import { ProfilePhoto } from 'components/_common'
import { Modal } from 'components'

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)

  const list = [0,1,2,3]

  const createNewEvent = () => {
    setShowModal(true)
  }

  return (
    <div>
      {showModal?<Modal>
        <h1>hola</h1>
      </Modal>:null}
      <div className="bg-image gradient"></div>
      <div className="container">
        <div className="title margin-b300 c-white">
         <h1>Your Events</h1>
        </div>
        <div className="event-list">
          <div className="EventCard shadow center" onClick={createNewEvent}>
            <p className="display">+</p>
            <h2 className="xlarge">Add new event</h2>
          </div>
            {list.map((item)=>{
              return(
                <EventCard/>
              )
            })}
        </div>
        <hr/>
        <h1>mas texto </h1>
      </div>
    </div>
  )
}

export default Dashboard
