import React from 'react'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import {useNavigate} from 'react-router-dom'
import { useEffect , useState } from 'react'

export default function ({array2, changeDate}) {

  return (
    <section>
      <FullCalendar plugins={[timeGridPlugin]} initialView="timeGridWeek" initialEvents={array2} />
    </section>
  )
}

