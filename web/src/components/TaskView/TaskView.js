import { useState } from "react"
import { Box, Container, Divider, Tabs, TabList, TabPanel, TabPanels, Tab, HStack, Text, Input } from '@chakra-ui/react'

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
        <Text className="date-selector" onClick={getTodayDay} mx="2">Today</Text>
        <Text className="date-selector" onClick={getPreviousDay} mx="2">{'<'}</Text>
        <Text className="date-selector" onClick={getNextDay} mx="2">{'>'}</Text>
        <Input type="date" value={day} onChange={e => setDay(e.target.value)} border={false} w="10%"/>
      </HStack>
      <Divider orientation='horizontal' mb="2"/>
      <HStack>
        <Box w="50%" borderWidth="1px" borderRadius="lg" p="3">
          <Text fontSize='2xl' as='b'>Tasks</Text>
          <Divider orientation='horizontal'  mb="2"/>
          <Text fontSize='l'>Actual Tasks</Text>
        </Box>
        <Box w="50%" borderWidth="1px" borderRadius="lg" p="3">
          <Text fontSize='2xl' as='b'>Appointments</Text>
          <Divider orientation='horizontal' mb="2"/>
          <Text fontSize='l'>Actual Appointments</Text>
        </Box>
      </HStack>
    </div>
  )
}

export default TaskView
