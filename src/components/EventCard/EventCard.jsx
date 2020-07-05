import React from 'react'
import './EventCard.scss'

const EventCard = (props) => {
  const { event } = props

  return (
    <div className="EventCard shadow">
      <h2 className="medium">nombre Evento</h2>
      <p className="regular color100">idprojecto</p>
    </div>
  )
}

export default EventCard
