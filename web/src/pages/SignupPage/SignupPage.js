import { useRef, useEffect, useState } from 'react'

import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Avatar,
  FormControl,
  FormLabel,
  InputRightElement,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Form } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  // Handle showing the password upon icon click
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.planner())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })
    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <div className="css-owjie1">
        <main className="rw-main">
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
          <Form onSubmit={onSubmit}>
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar bg="blue.500" />
              <Heading color="blue.500">TaskAi</Heading>
              <Box minW={{ base: '90%', md: '468px' }}>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <Input type="email" placeholder="Email" />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup>
                      <Input type="text" placeholder="Name" />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    width="full"
                  >
                    Sign Up
                  </Button>
                  <p id="sign-up-link-wrapper">
                    Have an account?&nbsp;
                    <a href={routes.login()} className="sign-up-link">
                      Sign in!
                    </a>
                  </p>
                </Stack>
              </Box>
            </Stack>
          </Form>
        </main>
      </div>
    </>
  )
}

export default SignupPage
