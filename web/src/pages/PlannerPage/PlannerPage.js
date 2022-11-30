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
} from '@chakra-ui/react'
import TaskView from 'src/components/TaskView/TaskView'
import Calendar from 'src/components/Calendar/Calendar'
import WeekView from 'src/components/WeekView/WeekView'
import DayView from 'src/components/DayView/DayView'
{
  /* import day view here */
}
import { Select } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

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
            {monthContentVisible && <Calendar />}
            {weekContentVisible && <WeekView />}
            {dayContentVisible && <DayView />}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default PlannerPage
