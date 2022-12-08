import { screen, render } from '@redwoodjs/testing/web'
import HomePage from './HomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts


describe('HomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePage />)
    }).not.toThrow()
  })
  it('renders a get started button when logged out', () => {
      render(<HomePage />)
      expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })
  it('renders a planner button when logged out', () => {
    render(<HomePage />)
    expect(screen.getByRole('button', { name: 'Planner' })).toBeInTheDocument()
})


})




