import { StrictMode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'

import App from './App'
import {Auth0Provider} from '@auth0/auth0-react'


ReactDOM.render(
  <Auth0Provider
    domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
    clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"
    redirectUri={window.location.origin}
  >
    <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
)
