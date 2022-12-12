import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  Container,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  HStack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import TaskView from 'src/components/TaskView/TaskView'
import Calendar from 'src/components/Calendar/Calendar'
import FullCalEvents from 'src/components/FullCalEventsCell/FullCalEventsCell'
import WeekView from 'src/components/WeekView/WeekView'
import DayView from 'src/components/DayView/DayView'
import AuthorizeCell from 'src/components/AuthorizeCell/AuthorizeCell'
import { Button, Center } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import DeleteAppointmentsCell from 'src/components/Appointment/DeleteAppointmentsCell'
import EventsFromDB from 'src/components/Appointment/EventsFromDBCell'
{
  /* import day view here */
}
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'



const PlannerPage = () => {

  /**
   * Setting the interactivity between the week, month and day views using react states
   */
  const {currentUser } = useAuth()
  const [state, setState] = useState('month')
  const [monthContentVisible, setMonthContentVisible] = useState(false)
  const [dayContentVisible, setDayContentVisible] = useState(false)
  const [weekContentVisible, setWeekContentVisible] = useState(false)

  const handleOnChange = (e) => {
    setState(e.target.value)
  }
  const [showEvents, setShowEvents] = useState(false)
  const [showGoogle, setShowGoogle] = useState(false)
  const queryParams = new URLSearchParams(window.location.search)
  const code = queryParams.get('code')

  const start = '2022-11-01T12:00:00Z'
  const end = '2022-12-30T12:00:00Z'

  useEffect(() => {
    state === 'month'
      ? setMonthContentVisible(true)
      : setMonthContentVisible(false)
    state === 'week'
      ? setWeekContentVisible(true)
      : setWeekContentVisible(false)
    // eslint-disable-next-line prettier/prettier
    state === 'day'
      ? setDayContentVisible(true)
      : setDayContentVisible(false)
  }, [state])
  const array1 = []
  return (
    
    <>
      <MetaTags title="Planner" description="Planner page" />

      <Tabs isLazy variant="enclosed" my="2">
        <HStack>
          <Text fontSize="xl" as="b" mx="2">
            Planner
          </Text>
          <TabList w="100%">
            <Tab>Tasks</Tab>
            <Tab>Calender</Tab>
          </TabList>
        </HStack>
        <TabPanels>
          <TabPanel>
            <TaskView></TaskView>
          </TabPanel>
          <TabPanel>
            <Select value={state} onChange={handleOnChange}>
              <option value="month">Month</option>
              <option value="week">Week</option>
              <option value="day">Day</option>
            </Select>
            {monthContentVisible && <EventsFromDB />}
            {weekContentVisible && <WeekView />}
            {dayContentVisible && <DayView />}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Center>
      <Button colorScheme='green' onClick={() => setShowEvents(true)}>Sync Your Google Calendar</Button>
      </Center>
      {showEvents ? (
        <AuthorizeCell></AuthorizeCell>
      ) : (
        <div>
        <br />
        <Center>
        <Button colorScheme='teal' onClick={() => setShowGoogle(true)}> Add Google Events to Calendar </Button>
        </Center>
        {showGoogle ? (
          <FullCalEvents start = {start} end = {end} code = {code} />
        ) : (
          <div></div>
        )         
        }
        </div>
      )}
    </>
  )
}

export default PlannerPage
