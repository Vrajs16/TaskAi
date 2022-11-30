import { render } from '@redwoodjs/testing/web'

import DayView from './DayView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DayView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DayView />)
    }).not.toThrow()
  })
})
