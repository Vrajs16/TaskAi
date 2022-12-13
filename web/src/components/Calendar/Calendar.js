import React from 'react'
import { useNavigate } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Select } from '@chakra-ui/react'

import { Link, navigate, routes } from '@redwoodjs/router'
import NewTaskPage from 'src/pages/Task/NewTaskPage/NewTaskPage'

export default function ({array2}) {
  let todayStr = new Date().toISOString().replace(/T.*$/, '')
  console.log(todayStr)

  return (
    <section>
      {/* add button here to add route to new task page
        <button onClick={navigate(NewTaskPage)}>New Task</button>
      */}
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth"
      initialEvents={array2}
      />
    </section>
  )
}
