import { render } from '@redwoodjs/testing/web'

import PlannerPage from './PlannerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlannerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannerPage />)
    }).not.toThrow()
  })
})
