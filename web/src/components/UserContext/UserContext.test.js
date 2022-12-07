import { render } from '@redwoodjs/testing/web'

import UserContext from './UserContext'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserContext', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserContext />)
    }).not.toThrow()
  })
})
