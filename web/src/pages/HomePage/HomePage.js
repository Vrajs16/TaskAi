import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from "react"
import { Button, ButtonGroup, Container, FormControl, HStack, Input, Select, Stack, Text,Center, Square, Circle,Heading,Box } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Center bg='tomato' h='100px' color='white'>
        <Text fontSize='5xl' as='b'>Welcome To Your Task Tracker</Text>
        <Stack direction='row' align='left'>
            <ButtonGroup gap='4'>
              <Button colorScheme='gray' variant='outline' size='md'>Sign In</Button>
              <Button colorScheme='gray' variant='outline' size='md'>Sign Up</Button>
            </ButtonGroup>
          </Stack>
      </Center>
      <Center bg='white' h='200px' color='black'>
        <Stack spacing={3}>
          <Text fontSize='3xl' as='b' align='center'>Coming Soon: A task tracking tool even better than Google Calendar</Text>
          <Text fontSize='3xl' as='b'align='center'>For now: Look through our pages</Text>
          <Text fontSize='2xl' color='blue' as='u'align='center'><Link to={routes.profile()}>Profile Page</Link></Text>
        </Stack>
      </Center>
    </>
  )
}

export default HomePage

