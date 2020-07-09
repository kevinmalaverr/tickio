import React from 'react'
import './EventCard.scss'
import Event  from 'utils/event'

const EventCard = (props) => {
  const { event } = props
  const handleClick = () =>{
    // const event = new Event()
    // event.createEvent('56df54dv5f', 'pruebaaa', 'desde pureba')
    // .then(resp => console.log('evento creado'))
    // .catch(e => console.error(e))
  }

  return ( 
    <div className="EventCard shadow" onClick={handleClick}>
      <div className="title">
        <h2 className="f-regular">nombre Evento</h2>
        <p className="f-small c-light">idprojecto</p>
      </div>
      <div className="details">

      </div>
      <div className="status">
        <p className="c-green w-bold f-small">Published</p>
      </div>
    </div>
  )
}

export default EventCard
