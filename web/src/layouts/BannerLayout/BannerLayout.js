import { Button, ButtonGroup, Container, FormControl, HStack, Input, Select, Stack, Text,Center, Square, Circle,Heading,Box } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { Flex, Spacer} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

const BannerLayout = ({ children }) => {
  return (
    <>
      <header>
        <Center bg='tomato' h='100px' color='white'>
          <Flex minWidth='max-content' direction= {['column', 'row']} align='center' gap='300'>
          <Flex minWidth='max-content' direction= {['column', 'row']} align='center' gap='5'>
              <Image
                borderRadius = '0'
                boxSize = '50px'
                src = 'https://raw.githubusercontent.com/Vrajs16/TaskAi/Banner-MelvinAcademia/web/PlaceHolderLogo.PNG'
                alt = 'Placeholder Logo'
              />
              <Text fontSize='5xl' as='b'>TaskAI</Text>
          </Flex>
            <Spacer />
            <Spacer />
                <ButtonGroup gap='4'>
                  <Button colorScheme='gray' variant='outline' size='md'>Sign Out</Button>
                  <Button colorScheme='gray' variant='outline' size='md'>Profile</Button>
                </ButtonGroup>
            </Flex>
        </Center>
      </header>
      <main>{children}</main>
    </>
  )

}

export default BannerLayout
