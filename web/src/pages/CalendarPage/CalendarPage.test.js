import { render } from '@redwoodjs/testing/web'

import CalendarPage from './CalendarPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CalendarPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CalendarPage />)
    }).not.toThrow()
  })
})
