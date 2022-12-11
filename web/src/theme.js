import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const theme = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: () => ({
      body: {
        bg: 'blackAlpha.700',
      },
    }),
  },
}

export default extendTheme(theme)
