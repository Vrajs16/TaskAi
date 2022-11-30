import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import {useNavigate} from 'react-router-dom'

export default function () {
  return (
    <section>
      {/* add button here to add route to new task page
        <button onClick={navigate(NewTaskPage)}>New Task</button>
      */}
      <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridWeek" />
    </section>
  )
}

