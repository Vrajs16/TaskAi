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
  calc,
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BannerLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  console.log(currentUser)
  console.log(isAuthenticated)
  return (
    <>
      <header style={{ width: '100vw' }}>
        <Center bg="blue.500" h="100px" color="white">
          <Flex
            direction="row"
            align="center"
            gap="300"
            justify="space-evenly"
            flexWrap="wrap"
            w="full"
          >
            <Link to={routes.home()}>
              <Text
                fontSize="5xl"
                as="b"
                bgGradient="linear(to-l, #20BF55, #01BAEF)"
                bgClip="text"
                outline="none"
              >
                TaskAI
              </Text>
            </Link>
            <ButtonGroup gap="4">
              <Link to={routes.profile()}>
                <Button colorScheme="gray" variant="outline" size="md">
                  Profile
                </Button>
              </Link>
              <text>
                {isAuthenticated ? (
                  <div>
                    <span>Logged in as {currentUser.name}</span>
                    <button type="button" onClick={logOut}>
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to={routes.login()}>Login</Link>
                )}
              </text>
            </ButtonGroup>
          </Flex>
        </Center>
      </header>
      <main
        style={{ height: 'calc(100vh - 100px', backgroundColor: '#F7FAFC' }}
      >
        {children}
      </main>
    </>
  )
}

export default BannerLayout
