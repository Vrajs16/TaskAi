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

import { Link, routes } from '@redwoodjs/router'

const BannerLayout = ({ children }) => {
  return (
    <>
      <header style={{width: "100vw"}}>
          <Center bg="blue.500" h="100px" color="white">
            <Flex
              minWidth="max-content"
              direction={['column', 'row']}
              align="center"
              gap="300"
            >
              <Link to={routes.home()}>
                <Flex
                  minWidth="max-content"
                  direction={['column', 'row']}
                  align="center"
                  gap="5"
                >
                  <Image
                    borderRadius="0"
                    boxSize="50px"
                    src="/taskai-logo.png"
                    alt="Placeholder Logo"
                  />
                  <Text fontSize="5xl" as="b">
                    TaskAI
                  </Text>
                </Flex>
              </Link>
              <Spacer />
              <Spacer />
              <ButtonGroup gap="4">
                <Link to={routes.profile()}>
                  <Button colorScheme="gray" variant="outline" size="md">
                    Profile
                  </Button>
                </Link>
                <Link to={routes.login()}>
                  <Button colorScheme="gray" variant="outline" size="md">
                    Sign Out
                  </Button>
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
