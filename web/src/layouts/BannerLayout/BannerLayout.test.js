import { render } from '@redwoodjs/testing/web'

import BannerLayout from './BannerLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BannerLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BannerLayout />)
    }).not.toThrow()
  })
})
