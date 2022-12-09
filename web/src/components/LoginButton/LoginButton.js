// LoginButton.js
import {
  Button
} from '@chakra-ui/react'

import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function LoginButton(props) {
  const { loginWithRedirect } = useAuth0()
  return (
    <div>
      <Button colorScheme="gray" variant="outline" size="md"
        onClick={() => loginWithRedirect({
          redirectUri: "http://localhost:8910/planner"
        })}
        className="loginButton"
      >
        Login
      </Button>
    </div>
  )
}

export default LoginButton
