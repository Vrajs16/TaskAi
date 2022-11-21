import { render } from '@redwoodjs/testing/web'

import WeekView from './WeekView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WeekView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WeekView />)
    }).not.toThrow()
  })
})
