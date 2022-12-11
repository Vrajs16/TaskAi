import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const theme = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('WhiteAlpha.900', '#0f2036')(props),
      },
    }),
  },
}

export default extendTheme(theme)
