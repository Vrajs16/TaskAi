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
import { Auth0Provider } from '@auth0/auth0-react'
import { useAuth0 } from "@auth0/auth0-react"

import { Link, routes } from '@redwoodjs/router'
import LoginButton from 'src/components/LoginButton/LoginButton'
import LogoutButton from 'src/components/LogoutButton/LogoutButton'


const BannerLayout = ({ children }) => {
  const { isAuthenticated } = useAuth0()
  const domain = process.env.domain
  const clientId = process.env.clientId
  const redirectUri = process.env.redirectUri


  return (
    <>
      <header style={{ width: "100%" }}>
        <Center bg="blue.500" h="100px" color="white">
          <Flex
            direction='row'
            align="center"
            gap="300"
            justify="space-evenly"
            flexWrap='wrap'
            w="full"

          >
            <Link to={routes.home()}>
              <Text fontSize="5xl" as="b" bgGradient='linear(to-l, #20BF55, #01BAEF)' bgClip='text' outline='none'>
                TaskAI
              </Text>
            </Link>
            <ButtonGroup gap="4">
              <Link to={routes.profile()}>
                <Button colorScheme="gray" variant="outline" size="md">
                  Profile
                </Button>
              </Link>


              <Link>
                <Auth0Provider
                  domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
                  clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"
                  redirectUri='http://localhost:8910/planner'
                >
                  <LogoutButton>
                  </LogoutButton>
                </Auth0Provider>

              </Link>

              <Link>
                <Auth0Provider
                  domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
                  clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"
                  redirectUri="http://localhost:8910/planner"
                >
                  <LoginButton>
                  </LoginButton>
                </Auth0Provider>
              </Link>


            </ButtonGroup>
          </Flex>
        </Center>
      </header>
      <main style={{ height: "calc(100vh - 100px", backgroundColor: "#F7FAFC" }}>{children}</main>
    </>
  )
}

export default BannerLayout
