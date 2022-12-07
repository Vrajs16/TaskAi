import { Auth0Provider } from '@auth0/auth0-react'
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

import LoggedInAs from 'src/components/LoggedInAs/LoggedInAs'
import LoginButton from 'src/components/LoginButton/LoginButton'
import LogoutButton from 'src/components/LogoutButton/LogoutButton'
const BannerLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  console.log(currentUser)
  return (
    <>
      <header style={{ width: '100vw' }}>
        <Center bg="blue.500" h="100px" color="white">
          <Flex
            minWidth="max-content"
            direction={['column', 'row']}
            align="center"
            gap="300"
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
            <Spacer />
            <Spacer />
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

              <Link>
                <Auth0Provider
                  domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
                  clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"
                  redirectUri={window.location.origin}
                >
                  <LoginButton></LoginButton>
                </Auth0Provider>
              </Link>
              <Link>
                <Auth0Provider
                  domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
                  clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"
                  redirectUri={window.location.origin}
                >
                  <LogoutButton></LogoutButton>
                </Auth0Provider>
              </Link>
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
