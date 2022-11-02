import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from "react"
import { Button, ButtonGroup, Container, FormControl, HStack, Input, Select, Stack, Text, Center, Square, Circle, Heading, Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Center bg='white' h='lg' color='black'>
        <Stack spacing={3}>
          <Text fontSize='3xl' as='b' align='center'>Coming Soon: A task tracking tool even better than Google Calendar</Text>
          <Text fontSize='3xl' as='b' align='center'>For now: Look through our pages</Text>
          <Text fontSize='2xl' color='blue' as='u' align='center'><Link to={routes.profile()}>Profile Page</Link></Text>
        </Stack>
      </Center>
    </>
  )
}

export default HomePage

