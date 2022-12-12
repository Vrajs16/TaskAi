import { useState } from 'react'

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
  useColorMode,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

function ProfilePage(props) {
  const { isAuthenticated, currentUser } = useAuth()
  const {colorMode, toggleColorMode} = useColorMode()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [currentPasswordError, setCurrentPasswordError] = useState('')
  const [newPasswordError, setNewPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')

  function onSubmit() {
    currentPassword !== props.password
      ? setCurrentPasswordError('Invalid password')
      : setCurrentPasswordError('')
    let count = 0
    newPassword.match(/[a-z]/) && count++
    newPassword.match(/[A-Z]/) && count++
    newPassword.match(/\d/) && count++
    newPassword.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) && count++
    newPassword.length < 8 || count < 3
      ? setNewPasswordError(
          'Password must be at least 8 characters and contain 3 of the following: lowercase letters, uppercase letters, numbers, and special characters'
        )
      : setNewPasswordError('')
    newPassword !== confirmPassword
      ? setConfirmPasswordError("Passwords don't match")
      : setConfirmPasswordError('')
  }

  function onCancel() {
    navigate(routes.home())
  }

  return (
    <>
      <MetaTags title="Profile" description="Profile page" />
      <Container maxW="3xl">
        <Stack spacing={5}>
          <Text fontSize="3xl" as="b">
            Profile
          </Text>
          <Stack spacing={0} w="50%">
            <Text className="input-title">Full Name</Text>
            <Input value={currentUser.name} isReadOnly={true} w="100%" />
          </Stack>
          <Stack spacing={0} w="50%">
            <Text className="input-title">Theme</Text>
            <Button w="50%" size="sm" onClick={toggleColorMode}>
              {colorMode === 'light' ? 'Dark' : 'Light'} Theme
            </Button>
          </Stack>
          <Stack>
            <Text className="input-title">Change Password</Text>
            <Stack
              border={true}
              borderWidth="3px"
              borderRadius="lg"
              p="2"
              spacing={1}
            >
              <Stack spacing={0} w="100%">
                <Text className="input-title">Current Password</Text>
                <Input
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Current Password"
                  w="90%"
                />
                {currentPasswordError ? (
                  <Text className="input-error">{currentPasswordError}</Text>
                ) : (
                  <br />
                )}
              </Stack>
              <Stack spacing={0} w="100%">
                <Text className="input-title">New Password</Text>
                <Input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New Password"
                  w="90%"
                />
                {newPasswordError ? (
                  <Text className="input-error">{newPasswordError}</Text>
                ) : (
                  <br />
                )}
              </Stack>
              <Stack spacing={0} w="100%">
                <Text className="input-title">Confirm New Password</Text>
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm New Password"
                  w="90%"
                />
                {confirmPasswordError ? (
                  <Text className="input-error">{confirmPasswordError}</Text>
                ) : (
                  <br />
                )}
              </Stack>
            </Stack>
          </Stack>
          <ButtonGroup gap="2" alignItems="center">
            <Button onClick={onSubmit} colorScheme="blue" align="end">
              Submit
            </Button>
            <Button
              onClick={onCancel}
              colorScheme="blue"
              variant="outline"
              align="end"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </>
  )
}

export default ProfilePage
