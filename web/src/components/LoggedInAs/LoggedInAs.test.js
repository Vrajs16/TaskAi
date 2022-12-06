import { render } from '@redwoodjs/testing/web'

import LoggedInAs from './LoggedInAs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoggedInAs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoggedInAs />)
    }).not.toThrow()
  })
})
