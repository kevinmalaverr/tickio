import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Dashboard.scss'
import { EventCard } from 'components'
import { ProfilePhoto, Button } from 'components/_common'
import { Modal } from 'components'
import { Field } from 'components/_common'

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false)

  const list = [0,1,6,7,5,1,1,3]

  const createNewEvent = () => {
    setShowModal(true)
  }



  return (
    <div>
      {showModal?<Modal>
        
        <button onClick={()=>setShowModal(false)}>cerrar</button>
        <p className="margin-b400">Create new event</p>

        <p className="display margin-b100">Start with the name of your Event</p>
        <Field placeHolder="Write the name of your Event"></Field>
        <p className="margin-b200">Project id</p>
        <Button color="primary">Continue</Button>
        <a class="waves-effect waves-light btn">button</a>


      </Modal>:null}
      <div className="bg-image"></div>
      <div className="container">
        <div className="margin-b300">
         <h1 className="f-title c-white">Your Events</h1>
        </div>
        <div className="event-list">
          <div className="EventCard shadow center" onClick={createNewEvent}>
            <p className="f-title">+</p>
            <h2 className="f-regular">Add new event</h2>
          </div>
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
