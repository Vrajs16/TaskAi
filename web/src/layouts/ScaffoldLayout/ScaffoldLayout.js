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
import { Toaster } from '@redwoodjs/web/toast'

const ScaffoldLayout = ({
  title,
  titleTo,
  buttonLabel,
  buttonTo,
  children,
}) => {
  return (
    <div className="rw-scaffold">
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
                <Flex
                  minWidth="max-content"
                  direction={['column', 'row']}
                  align="center"
                  gap="5"
                >
                  <Text
                    fontSize="5xl"
                    as="b"
                    bgGradient="linear(to-l, #20BF55, #01BAEF)"
                    bgClip="text"
                    outline="none"
                  >
                    TaskAI
                  </Text>
                </Flex>
              </Link>
              <Spacer />
              <Spacer />
              <ButtonGroup gap="4">
                <Link to={routes[titleTo]()}>
                  <Button colorScheme="gray" variant="outline" size="md">
                    {title}
                  </Button>
                </Link>
                <Link to={routes[buttonTo]()}>
                  <Button colorScheme="gray" variant="outline" size="md">
                    <div className="rw-button-icon">+</div> {buttonLabel}
                  </Button>
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
    </div>
  )
}

export default ScaffoldLayout
