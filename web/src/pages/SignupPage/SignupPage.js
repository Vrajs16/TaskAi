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
import { Form, Submit, TextField, PasswordField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import PasswordStrengthMeter from 'src/components/PasswordStrengthMeter'

const SignupPage = () => {
  const { isAuthenticated, signUp, currentUser, logOut } = useAuth()

  // Handle showing the password upon icon click
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)

  useEffect(() => {
    if (isAuthenticated) {
      logOut()
      toast.success(
        `Email with link to verify has been sent to ${currentUser.email}`
      )
      navigate(routes.login())
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
      toast.success(
        `Email with link to verify has been sent to ${currentUser.email}`
      )
    }
  }

  const checkValidation = (e) => {
    const confPass = e.target.value
    setconfirmPassword(confPass)
    if (password != confPass) {
      setisError('Confirm Password does not match Password')
    } else {
      setisError('')
    }
  }

  const [isError, setisError] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <MetaTags title="Signup" />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <main className="rw-main">
          <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
          <Form onSubmit={onSubmit}>
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                bg="blue.500"
                src="https://www.drupal.org/files/project-images/drupal-module-calendar.jpg"
                size="lg"
                mb="2"
              />
              <Heading color="blue.500">TaskAi</Heading>
              <Box minW={{ base: '90%', md: '468px' }}>
                <Stack spacing={4} p="1rem" boxShadow="md">
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <Input
                        as={TextField}
                        type="email"
                        ref={usernameRef}
                        placeholder="Email"
                        name="username"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup>
                      <Input
                        type="text"
                        placeholder="Name"
                        name="name"
                        as={TextField}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        as={PasswordField}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <PasswordStrengthMeter password={password} />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={(e) => checkValidation(e)}
                        name="confirmPassword"
                        as={PasswordField}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? 'Hide' : 'Show'}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <PasswordStrengthMeter password={confirmPassword} />
                  </FormControl>

                  <p className="formError">{isError}</p>

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
