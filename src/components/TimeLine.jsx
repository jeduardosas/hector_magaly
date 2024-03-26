import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import '../styles/timeline.css'

const TimeLine = () => {
  const protocol = [
    {
      id:1,
      time:'15:00 PM',
      name:'Recepción',
      icon:'rings_white',
      color:'#bea77b',
      textColor:'#fff'
    },

    {
      id:2,
      time:'16:00 PM',
      name:'Comida',
      icon:'cutlery_white',
      color:'#bea77b',
      textColor:'#fff'
    },

    {
      id:3,
      time:'17:30 PM',
      name:'Ceremonia',
      icon:'wedding-vows_white',
      color:'#bea77b',
      textColor:'#fff'
    },

    {
      id:4,
      time:'18:30 PM',
      name:'Protocolo',
      icon:'drinking_white',
      color:'#bea77b',
      textColor:'#fff'
    },

    {
      id:5,
      time:'...',
      name:'Hasta que el Cuerpo Aguante',
      icon:'music_white',
      color:'#bea77b',
      textColor:'#fff'
    },
  ]
  return (
    <div className='timeline'>
      <h3 className='timeline-title-cont'>Protocolo</h3>
      <VerticalTimeline
      lineColor={'#bea77b'}
      >
        {
          protocol.map(item=>(
            <VerticalTimelineElement
              key={item.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: `${item.color}`, color:`${item.textColor}`, marginRight:'10px' }}
              contentArrowStyle={{ borderRight: `7px solid ${item.color}`}}
              date={`${item.time}`}
              dateClassName='custom-date-color'
              iconStyle={{ background: `${item.color}`, fill: '#fff', boxShadow:`0 0 0 4px ${item.color}`}} 
              icon={<img src={`/img/icons/${item.icon}.svg`} alt={`ico-${item.icon}`} className='custom-icon'/>}
            >
            <h3 className="vertical-timeline-element-title timeline-title">{item.name}</h3>
            </VerticalTimelineElement>
          ))
        }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine