import { useState } from 'react'

import {
  Box,
  Container,
  Divider,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
  HStack,
  Text,
  Input,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import AppointmentsCell from 'src/components/AppointmentsCell'
import TaskCell from 'src/components/Task/TaskCell'
import TasksCell from 'src/components/Task/TasksCell'

function TaskView() {
  const [day, setDay] = useState(new Date().toJSON().slice(0, 10))

  function getTodayDay() {
    setDay(new Date().toJSON().slice(0, 10))
  }

  function getNextDay() {
    let nextDay = new Date(day)
    nextDay.setDate(nextDay.getDate() + 1)
    setDay(nextDay.toJSON().slice(0, 10))
  }

  function getPreviousDay() {
    let nextDay = new Date(day)
    nextDay.setDate(nextDay.getDate() - 1)
    setDay(nextDay.toJSON().slice(0, 10))
  }

  return (
    <div>
      <HStack>
        <Text className="date-selector" onClick={getTodayDay} mx="2">
          Today
        </Text>
        <Text className="date-selector" onClick={getPreviousDay} mx="2">
          {'<'}
        </Text>
        <Text className="date-selector" onClick={getNextDay} mx="2">
          {'>'}
        </Text>
        <Input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          border={false}
          w="10%"
        />
      </HStack>
      <Divider orientation="horizontal" mb="2" />
      <HStack alignItems="start">
        <Box w="50%" borderWidth="1px" borderRadius="lg" p="3">
          <Text fontSize="2xl" as="b">
            Tasks
          </Text>
          <TasksCell day={day} isTasks={true}></TasksCell>
          <Divider orientation="horizontal" mb="2" />
        </Box>
        <Box w="50%" borderWidth="1px" borderRadius="lg" p="3" center="false">
          <Text fontSize="2xl" as="b">
            Appointments
          </Text>
          <TasksCell day={day} isTasks={false}></TasksCell>
          <Divider orientation="horizontal" mb="2" />
        </Box>
      </HStack>
      <Text fontSize="2xl" as="b">
        <Link to={routes.newTask()}>Create a new task</Link>
      </Text>
    </div>
  )
}

export default TaskView
//<TasksCell day={day} />
//<AppointmentsCell day={day} />
