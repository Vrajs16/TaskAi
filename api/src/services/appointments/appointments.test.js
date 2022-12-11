import {
  appointments,
  appointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from './appointments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('appointments', () => {
  scenario('returns all appointments', async (scenario) => {
    const result = await appointments()

    expect(result.length).toEqual(Object.keys(scenario.appointment).length)
  })

  scenario('returns a single appointment', async (scenario) => {
    const result = await appointment({ id: scenario.appointment.one.id })

    expect(result).toEqual(scenario.appointment.one)
  })

  scenario('creates a appointment', async () => {
    const result = await createAppointment({
      input: { userID: 1213349, title: 'String', description: 'String' },
    })

    expect(result.userID).toEqual(1213349)
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a appointment', async (scenario) => {
    const original = await appointment({
      id: scenario.appointment.one.id,
    })
    const result = await updateAppointment({
      id: original.id,
      input: { userID: 7470871 },
    })

    expect(result.userID).toEqual(7470871)
  })

  scenario('deletes a appointment', async (scenario) => {
    const original = await deleteAppointment({
      id: scenario.appointment.one.id,
    })
    const result = await appointment({ id: original.id })

    expect(result).toEqual(null)
  })
})
