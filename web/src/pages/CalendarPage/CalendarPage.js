import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Calendar from 'src/components/Calendar/Calendar.js'
import NewTaskPage from '../Task/NewTaskPage/NewTaskPage'

const CalendarPage = () => {
  return (
    <Calendar />
  );
}

export default CalendarPage;