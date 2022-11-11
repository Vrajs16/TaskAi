import { useState } from 'react'

import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Center,
  Square,
  Circle,
  Heading,
  Box,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Center color="black" h="full">
        {/* I feel like we should remove this landing page since it has no value for our project, just go straight into the calendar/task view ~ "Vraj Shah" */}
        <Stack spacing={3}>
          <Text fontSize="3xl" as="b" align="center">
            Coming Soon: A task tracking tool even better than Google Calendar
          </Text>
        </Stack>
      </Center>
    </>
  )
}

export default HomePage
