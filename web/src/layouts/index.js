import { StrictMode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
)
