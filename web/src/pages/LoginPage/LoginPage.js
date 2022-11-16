/* eslint-disable react/no-children-prop */

import { useState } from 'react'

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
  InputRightElement,
  Link
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'

import { routes } from '@redwoodjs/router'
const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <>
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
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="username" />
                </InputGroup>
              </FormControl>
              <FormControl>
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
                  <Link color="blue.500" href={routes.forgotPassword()}>Forgot password?</Link>
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
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Do not have an account?{' '}
        <Link color="blue.500" href={routes.register()}>
          Sign Up
        </Link>
      </Box>
      <Box>
        Sign In Using GitHub?{' '}
        <Link color="blue.500" href={routes.GitAuth()}>
          Sign In
        </Link>
      </Box>
      </>
  )
}

export default LoginPage
