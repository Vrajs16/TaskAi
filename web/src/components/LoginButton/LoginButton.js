// LoginButton.js
import {
  Button
} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import { useAuth0 } from '@auth0/auth0-react'
import {Auth0Provider} from '@auth0/auth0-react'
import React from 'react'

function LoginButton(props) {

    const { loginWithRedirect } = useAuth0()
    return (
        <div>
              <Button colorScheme="gray" variant="outline" size="md"
                onClick={()=>loginWithRedirect()} 
                className="loginButton"
                >
                Login
              </Button>
        </div>
    )
}

export default LoginButton
