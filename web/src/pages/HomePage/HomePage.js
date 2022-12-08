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
      {/*   <Center color="black" h="full">
        <Stack spacing={3}>
          <Text fontSize="3xl" as="b" align="center">
            Other views: <Button colorScheme='blue'><Link to={routes.planner()}>Planner</Link></Button>
          </Text>
        </Stack>
      </Center> */}

      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Organizing Your Schedule{' '}
            <Text as={'span'} color={'blue.500'}>
              Made Easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a task. Never miss an appointment. Never be late for one too. Keep track of your
            day, week, and year all in one platform. Collaborate with others and never miss a beat. Get started today, checkout our planner view!
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Link to={routes.profile()}>
              <Button
                rounded={'full'}
                px={6}
                colorScheme={'blue'}
                _hover={{ bg: 'blue.400' }}>
                Get Started
              </Button></Link>
            <Link to={routes.planner()}>
              <Button rounded={'full'} px={6}>
                Planner
              </Button></Link>
          </Stack>
          <Flex w={'full'}>
            {/*    <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          /> */}
          </Flex>
        </Stack>
      </Container>

    </>
  )
}

export default HomePage
