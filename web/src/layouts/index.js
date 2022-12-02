import { StrictMode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'

import App from './App'
import {Auth0Provider} from '@auth0/auth0-react'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StrictMode>,
  rootElement
)
