import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

const App = () => (

  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate='%PageTitle | %AppTitle'>
      <ColorModeScript />
      <ChakraProvider>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
