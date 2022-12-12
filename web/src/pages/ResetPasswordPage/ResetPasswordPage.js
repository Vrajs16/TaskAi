import { useEffect, useRef, useState } from 'react'

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
  Center,
} from '@chakra-ui/react'
import { translateRect } from '@fullcalendar/react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  PasswordField,
  TextField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import PasswordStrengthMeter from 'src/components/PasswordStrengthMeter'

const ResetPasswordPage = ({ resetToken }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)

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

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        // toast.error(response.error)
        toast.error('An error occured. Try requesting a new link.')
        navigate(routes.login())
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [])

  const passwordRef = useRef(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (confirmPassword != password) {
      toast.error('Passwords do not match!')
    } else if (response.error) {
      toast.error(response.error)
    } else {
      await reauthenticate()
      toast.success('Password successfully changed')
      navigate(routes.login(), { state: { resetPassword: true } })
    }
  }

  return (
    <>
      <MetaTags title="Reset Password" />

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
                    <FormLabel>New Password</FormLabel>
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
                    <p className="formError">{isError}</p>
                  </FormControl>

                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="blue"
                    width="full"
                  >
                    Reset Password
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </Form>
        </main>
      </div>
    </>
  )
}

export default ResetPasswordPage
