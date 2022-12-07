import { useRef, useEffect, useState } from 'react'
// import { useEffect } from 'react'

import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  FormLabel,
  InputRightElement,
} from '@chakra-ui/react'
import { FaLock, FaUserAlt } from 'react-icons/fa'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  // Handle showing the password upon icon click
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.planner())
    }
  }, [isAuthenticated])

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <Form>
          <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar bg="blue.500" />
            <Heading color="blue.500">TaskAi</Heading>
            <Box minW={{ base: '90%', md: '468px' }}>
              <form>
                <Stack
                  spacing={4}
                  p="1rem"
                  backgroundColor="whiteAlpha.900"
                  boxShadow="md"
                >
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input type="email" placeholder="username" />
                    </InputGroup>
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.300"
                        children={<CFaLock color="gray.300" />}
                      />
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
                    <FormHelperText textAlign="right">
                      <Link color="blue.500" to={routes.forgotPassword()}>
                        Forgot Password?
                      </Link>
                    </FormHelperText>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    width="full"
                  >
                    Sign in
                  </Button>
                  {/* <Link to={routes.signup()} className="rw-link">
                    <Button
                      borderRadius={0}
                      type="button"
                      variant="solid"
                      colorScheme="blue"
                      width="full"
                    >
                      Don&apos;t have an account? Sign up!
                    </Button>
                  </Link> */}
                  <p id="sign-up-link-wrapper">
                    Don&apos;t have an account?&nbsp;
                    <a href={routes.signup()} className="sign-up-link">
                      Sign up!
                    </a>
                  </p>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Form>
      </main>
    </>
  )
}

export default LoginPage
