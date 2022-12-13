import { useState } from 'react'

import { User } from '@auth0/auth0-react'
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

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
const HomePage = () => {
  function verifying() {
    toast.error('Please verify your account via email')
  }
  const { isAuthenticated, currentUser } = useAuth()
  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <MetaTags title="Home" description="Home page" />
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Organizing Your Schedule{' '}
            <Text as={'span'} color={'blue.500'}>
              Made Easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a task. Never miss an appointment. Never be late for one
            too. Keep track of your day, week, and year all in one platform.
            Collaborate with others and never miss a beat. Get started today,
            checkout our planner view!
          </Text>

          <Stack spacing={6} direction={'row'}>
            {isAuthenticated ? (
              <div>
                {currentUser.isVerified ? (
                  <div>
                    <Link to={routes.profile()}>
                      <Button
                        rounded={'full'}
                        px={6}
                        colorScheme={'blue'}
                        _hover={{ bg: 'blue.400' }}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div>
                      <Button
                        onClick={() => verifying()}
                        rounded={'full'}
                        px={6}
                        colorScheme={'blue'}
                        _hover={{ bg: 'blue.400' }}
                      >
                        Get Started
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div>
                <Link to={routes.signup()}>
                  <Button
                    rounded={'full'}
                    px={6}
                    colorScheme={'blue'}
                    _hover={{ bg: 'blue.400' }}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}

            {isAuthenticated ? (
              <div>
                {currentUser.isVerified ? (
                  <div>
                    <Link to={routes.planner()}>
                      <Button rounded={'full'} px={6}>
                        Planner
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Button onClick={() => verifying()} rounded={'full'} px={6}>
                      Planner
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Link to={routes.login()}>
                  <Button rounded={'full'} px={6}>
                    Planner
                  </Button>
                </Link>
              </div>
            )}
          </Stack>
          <Stack direction='row'>
           <Image
             role='PlanningImage'
             maxW='500px'
             objectFit='cover'
             src='https://www.aihr.com/wp-content/uploads/succession-planning-.png'
             alt='Planning'
            />
           <Image
             role='CompletingImage'
             maxW='500px'
             padding='50px'
             objectFit='cover'
             src='https://img.freepik.com/premium-vector/completed-task-work-done-happy-woman-worker-business-secretary-cartoon-illustration_385073-97.jpg'
             alt='Completing'
            />
           <Image
             role='SuccessImage'
             maxW='500px' src='https://media.istockphoto.com/id/1143048152/vector/vector-illustration-representation-team-as-whole.jpg?s=612x612&w=0&k=20&c=LuAHw3MnTXymKfw7Jlh7zEmxL2_5hmVnrm3O9CkC6iQ='
             alt='Success' />
         </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default HomePage
