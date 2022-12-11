import { db } from 'src/lib/db'

export const appointments = () => {
  return db.appointment.findMany()
}

export const appointment = ({ id }) => {
  return db.appointment.findUnique({
    where: { id },
  })
}

export const createAppointment = ({ input }) => {
  return db.appointment.create({
    data: input,
  })
}

export const updateAppointment = ({ id, input }) => {
  return db.appointment.update({
    data: input,
    where: { id },
  })
}

export const deleteAppointment = ({ id }) => {
  return db.appointment.delete({
    where: { id },
  })
}
