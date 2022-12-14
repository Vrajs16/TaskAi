import React, { useEffect , useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Select } from '@chakra-ui/react'

import { Link, navigate, routes } from '@redwoodjs/router'
import NewTaskPage from 'src/pages/Task/NewTaskPage/NewTaskPage'

export default function ({array2, changeDate}) {

  const [state, setState] = useState({});

  useEffect(() => {
    if (changeDate.changeDate !== state.changeDate){
      setState({changeDate:changeDate.changeDate})
    }
  },[changeDate])

  function mapMonthsToNumbers(month) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return months.indexOf(month);
  }

  return (
    <section>
      {/* add button here to add route to new task page
        <button onClick={navigate(NewTaskPage)}>New Task</button>
      */}
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth"
      initialEvents={array2}
      initialDate={changeDate}
      />
    </section>
  )
}


