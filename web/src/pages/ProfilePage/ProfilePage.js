import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Button, ButtonGroup, Container, Flex, HStack, Input, Select, Spacer, Stack, Text } from '@chakra-ui/react'

const ProfilePage = () => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <Container maxW='3xl'>
        <Stack spacing={5}>
          <Text fontSize='3xl' as='b'>Profile</Text>
          <HStack>
            <Stack spacing={0} w="50%">
              <Text className="input-title">First Name</Text>
              <Input placeholder='First Name' isReadOnly={true} w="80%"/>
            </Stack>
            <Stack spacing={0} w="50%">
              <Text className="input-title">First Name</Text>
              <Input placeholder='First Name' isReadOnly={true} w="80%"/>
            </Stack>
          </HStack>
          <Stack spacing={0} w="50%">
            <Text className="input-title">Theme</Text>
            <Select  w="80%">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Select>
          </Stack>
          <Stack>
            <Text className="input-title">Change Password</Text>
            <Stack border={true} borderWidth="3px" borderRadius="lg" p="2" spacing={5}>
              <Stack spacing={0} w="100%">
                <Text className="input-title">Current Password</Text>
                <Input placeholder='Current Password' w="90%"/>
              </Stack>
              <Stack spacing={0} w="100%">
                <Text className="input-title">New Password</Text>
                <Input placeholder='New Password' w="90%"/>
              </Stack>
              <Stack spacing={0} w="100%">
                <Text className="input-title">Confirm New Password</Text>
                <Input placeholder='Confirm New Password' w="90%"/>
              </Stack>
            </Stack>
          </Stack>
          <ButtonGroup gap='2' alignItems="center">
            <Button colorScheme="blue" align="end">Submit</Button>
            <Button colorScheme="blue" variant='outline' align="end">Cancel</Button>
          </ButtonGroup>
        </Stack>
      </Container>



    </>
  )
}

export default ProfilePage
