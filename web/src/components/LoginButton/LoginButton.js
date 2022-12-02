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
      <Auth0Provider
                domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
                clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"
                redirectUri={window.location.origin}
                > 
        <div>
            
              <Button colorScheme="gray" variant="outline" size="md"
                onClick={()=>loginWithRedirect()} 
                className="loginButton"
                >
                Login
              </Button>
          
        </div>
        </Auth0Provider>
    )
}

export default LoginButton
