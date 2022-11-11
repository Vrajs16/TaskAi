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
  Link
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { routes } from '@redwoodjs/router'
const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

const ForgotPasswordPage = () => {
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
                  <Input type="email" placeholder="Enter your username/email" />
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Forgot Password
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Have an account?{' '}
        <Link color="blue.500" href={routes.login()} >
          Sign in
        </Link>
      </Box>
    </>
  )
}

export default ForgotPasswordPage
