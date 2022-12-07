import { useEffect, useRef } from 'react'

import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  Box,
  Avatar,
  FormControl,
  chakra,
  FormLabel,
  Text,
} from '@chakra-ui/react'
import { FaUserAlt } from 'react-icons/fa'

import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CFaUserAlt = chakra(FaUserAlt)

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )

      navigate(routes.login())
    }
  }

  return (
    <>
      {/* <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} /> */}
      <MetaTags title="Forgot Password" />

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
                  <FormLabel>Username</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      as={TextField}
                      type="email"
                      ref={usernameRef}
                      placeholder="Email"
                      name="username"
                    />
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                >
                  Submit
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
    </>
  )
}

export default ForgotPasswordPage
