import { render,screen } from '@redwoodjs/testing/web'

import PlannerPage from './PlannerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PlannerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannerPage />)
    }).not.toThrow()
  })
  it('renders a Planner name when logged out', () => {
    render(<PlannerPage />)
    expect(screen.getByText('Planner')).toBeInTheDocument()
  })
  it('renders a tasks tab when logged out', () => {
    render(<PlannerPage />)
    const tab = screen.getByRole('tab', { name: 'Tasks' });
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Tasks');
  })

 })

