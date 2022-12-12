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
import { Link, routes, navigate } from '@redwoodjs/router'

const BannerLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  const logOutUser = () => {
    // logout the user
    logOut()
    // navigate to home page
    navigate(routes.home())
  }
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
                bgGradient="linear(to-l, green.300, blue.300)"
                bgClip="text"
                outline="none"
              >
                TaskAI
              </Text>
            </Link>

            <ButtonGroup gap="4">
              {isAuthenticated ? (
                <div>
                  {currentUser.isVerified ? (
                    <div>
                      <Link to={routes.profile()}>
                        <Button colorScheme="gray" variant="outline" size="md">
                          Profile
                        </Button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <Button colorScheme="gray" variant="outline" size="md">
                        Profile
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={routes.home()}></Link>
              )}

              {isAuthenticated ? (
                <div>
                  <span style={{ marginRight: '20px' }}>
                    Welcome {currentUser.name} !
                  </span>

                  <Button
                    colorScheme="gray"
                    variant="outline"
                    size="md"
                    onClick={logOutUser}
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <Link to={routes.login()}>
                  <Button colorScheme="gray" variant="outline" size="md">
                    Login
                  </Button>
                </Link>
              )}
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
