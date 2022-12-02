import React from 'react'
export const AuthURLContext = React.createContext(null)

export default ({children}) => {
  const [authorizationURL, setAuthorizationURL] = React.useState(null)
  const store = {
    authorizationURL: [authorizationURL, setAuthorizationURL],
  }
  return ( <AuthURLContext.Provider value={store}>{children}</AuthURLContext.Provider> )
}