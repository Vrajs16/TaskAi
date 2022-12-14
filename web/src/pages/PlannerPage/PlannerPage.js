import {
  Container,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  HStack,
  Text,
  Select,
  Center,
  Input,
  InputGroup,
  InputRightAddon,
  Button,
  Box
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import TaskView from 'src/components/TaskView'
import FullCalEvents from 'src/components/FullCalEventsCell/FullCalEventsCell'
import AuthorizeCell from 'src/components/AuthorizeCell/AuthorizeCell'
import EventsFromDB from 'src/components/Appointment/EventsFromDBCell'
import EventsFromDBWeek from 'src/components/Appointment/EventsFromDBWeekCell'
import EventsFromDBDay from 'src/components/Appointment/EventsFromDBDayCell'

import { useEffect, useState } from 'react'
import { CalendarIcon } from '@chakra-ui/icons'

const PlannerPage = () => {
  /**
   * Setting the interactivity between the week, month and day views using react states
   */
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

  /*
    Setting the interactivity for the date picker
  */
  const [changeDate, setChangeDate] = useState(new Date())
  const handleOnDateChange = (e) => {
    setChangeDate(e.target.value)
  }

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

  return (
    // need an array of apps from db
    // so i can delete the database after getting said array
    // and pass that array to the components that generate calendar
    <>
      <MetaTags title="Planner" description="Planner page" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Tabs isLazy variant="enclosed" my="2">
        <HStack>
          <Text fontSize="xl" as="b" mx="2">
            Planner
          </Text>
          <TabList w="100%">
            <Tab>Tasks</Tab>
            <Tab>Calendar</Tab>
          </TabList>
        </HStack>
        <TabPanels>
          <TabPanel>
            <TaskView></TaskView>
          </TabPanel>
          <TabPanel>
            <Center>
              <HStack>
                <Box>
                  <Select value={state} onChange={handleOnChange}>
                    <option value="month">Month</option>
                    <option value="week">Week</option>
                    <option value="day">Day</option>
                  </Select>
                </Box>
                <Box>
                  <InputGroup>
                    <Input
                    type='date'
                    value={changeDate}
                    onChange = {handleOnDateChange}
                    >
                    </Input>
                    <InputRightAddon>{<CalendarIcon />}</InputRightAddon>
                  </InputGroup>
                </Box>
              </HStack>
            </Center>
            {monthContentVisible && <EventsFromDB date = {{changeDate}}/>}
            {weekContentVisible && <EventsFromDBWeek date = {{changeDate}}/>}
            {dayContentVisible && <EventsFromDBDay date = {{changeDate}}/>}
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
