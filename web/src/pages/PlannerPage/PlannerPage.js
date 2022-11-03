import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Container, Tabs, TabList, TabPanel, TabPanels, Tab, HStack, Text } from '@chakra-ui/react'
import TaskView from 'src/components/TaskView/TaskView'

const PlannerPage = () => {
  return (
    <>
      <MetaTags title="Planner" description="Planner page" />

          <Tabs isLazy variant='enclosed' my="2">
            <HStack>
              <Text fontSize='xl' as='b' mx="2">Planner</Text>
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
                <p>Calender View!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
    </>
  )
}

export default PlannerPage
