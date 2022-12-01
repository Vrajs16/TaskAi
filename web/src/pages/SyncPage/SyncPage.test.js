import { render } from '@redwoodjs/testing/web'

import SyncPage from './SyncPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SyncPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SyncPage />)
    }).not.toThrow()
  })
})
