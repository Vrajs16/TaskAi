import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import * as theme from 'config/chakra.config'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import AuthURLProvider from 'src/contexts/AuthURL'
import './index.css'

const extendedTheme = extendTheme(theme)

const App = () => {
  return (
    <>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <ColorModeScript />
          <ChakraProvider theme={extendedTheme}>
            <AuthURLProvider>
            <RedwoodApolloProvider>
              <Routes />
            </RedwoodApolloProvider>
            </AuthURLProvider>
          </ChakraProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </>
  )
}

export default App
