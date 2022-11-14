import {Flex} from '@chakra-ui/react'
const AuthLayout = ({ children }) => {
  return <>
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.50"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  </>
}

export default AuthLayout
