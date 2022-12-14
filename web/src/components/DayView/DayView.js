import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ({array2, changeDate}) {

  return (
    <section>
      {/* add button here to add route to new task page
        <button onClick={navigate(NewTaskPage)}>New Task</button>
      */}
      <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridDay" initialEvents = {array2}/>
    </section>
  )
}

