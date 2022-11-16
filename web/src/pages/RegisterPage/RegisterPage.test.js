import { render } from '@redwoodjs/testing/web'

import RegisterPage from './RegisterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RegisterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegisterPage />)
    }).not.toThrow()
  })
})
