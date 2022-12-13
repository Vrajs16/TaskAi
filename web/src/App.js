import { Auth0Provider } from '@auth0/auth0-react'
import { useAuth0 } from '@auth0/auth0-react'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import theme from './theme'

const App = () => {
  return (
    <>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <AuthProvider type="dbAuth">
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
              <RedwoodApolloProvider>
                <Routes />
              </RedwoodApolloProvider>
            </ChakraProvider>
          </AuthProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </>
  )
}

export default App
