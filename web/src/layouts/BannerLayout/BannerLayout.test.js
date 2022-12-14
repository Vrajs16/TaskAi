import { ChakraProvider } from '@chakra-ui/react'
import { render,screen } from '@redwoodjs/testing/web'
import BannerLayout from 'src/layouts/BannerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BannerLayout', () => {
 it('renders successfully', () => {
   expect(() => {
     render(
       <ChakraProvider>
         <BannerLayout />
       </ChakraProvider>
     )
   }).not.toThrow()
 })
 it('renders a get started button when logged out', () => {
   render(
   <ChakraProvider>
     <BannerLayout />
   </ChakraProvider>)
   expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
 })
 it('renders a profile button when logged out', () => {
   render(
   <ChakraProvider>
     <BannerLayout />
   </ChakraProvider>)
   expect(screen.getByText('TaskAI')).toBeInTheDocument()
 })
})
