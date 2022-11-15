import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default class DemoApp extends React.Component {
  render() {
    return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
  }
}
