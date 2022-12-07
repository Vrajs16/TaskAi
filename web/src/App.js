import{Auth0Provider} from '@auth0/auth0-react'
import{useAuth0} from "@auth0/auth0-react"
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import * as theme from 'config/chakra.config'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import AuthURLProvider from 'src/contexts/AuthURL'
import './index.css'
const extendedTheme = extendTheme(theme)

import LoginButton from 'src/components/LoginButton/LoginButton'
import LogoutButton from 'src/components/LogoutButton/LogoutButton'



const App = () => {
  const {isAuthenticated} = useAuth0()
  console.log(isAuthenticated)
  return (
    <>
    
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
<<<<<<< HEAD
          <ColorModeScript />
          <ChakraProvider theme={extendedTheme}>
            <AuthURLProvider>
            <RedwoodApolloProvider>
              <Routes />
            </RedwoodApolloProvider>
            </AuthURLProvider>
          </ChakraProvider>
=======
          
          <Auth0Provider
                domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
                clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"           
                redirectUri="http://localhost:8910/planner"
                > 
                <LoginButton> </LoginButton>
          </Auth0Provider>
          <Auth0Provider
                domain="dev-i1vyox6upbtxdp6g.us.auth0.com"
                clientId="M23oYCQdXUjKfreB0vgHIDVmIJmoLWXy"           
                redirectUri="http://localhost:8910"
                > 
                <LogoutButton> </LogoutButton>
          </Auth0Provider>

            <ColorModeScript />
            <ChakraProvider theme={extendedTheme}>
              <RedwoodApolloProvider>
                <Routes />
              </RedwoodApolloProvider>
            </ChakraProvider>
>>>>>>> 35236241898f54cf814bfb3b68284ac95f615376
        </RedwoodProvider>
      </FatalErrorBoundary>
    </>
  )
}

export default App
