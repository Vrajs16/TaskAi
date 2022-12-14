import { render } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './AppointmentsCell'
import { standard } from './AppointmentsCell.mock'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('AppointmentsCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  // When you're ready to test the actual output of your component render
  // you could test that, for example, certain text is present:
  //
  // 1. import { screen } from '@redwoodjs/testing/web'
  // 2. Add test: expect(screen.getByText('Hello, world')).toBeInTheDocument()

<<<<<<< HEAD:web/src/components/Appointment/AppointmentsCell/AppointmentsCell.test.js
  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success appointments={standard().appointments} />)
    }).not.toThrow()
  })
=======
//  it('renders Success successfully', async () => {
//   expect(() => {
//      render(<Success eventsFromDb={standard().eventsFromDb} />)
//    }).not.toThrow()
//  })
>>>>>>> 5c0b1b33675f34fbbea4f4bf34affcfc0f52b662:web/src/components/Appointment/EventsFromDBCell/EventsFromDBCell.test.js
})
