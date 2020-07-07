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
      <h2 className="medium">nombre Evento</h2>
      <p className="regular color100">idprojecto</p>
    </div>
  )
}

export default EventCard
