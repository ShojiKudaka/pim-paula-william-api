import type { Appointment } from '@prisma/client'

interface IAppointmentServices {
  getAllAppointments(): Promise<Appointment[] | null>
  getAppointmentById({
    id,
  }: Pick<Appointment, 'id'>): Promise<Appointment | null>
  createAppointment({
    name,
    serviceId,
    employeeId,
    client,
  }: Pick<
    Appointment,
    'name' | 'serviceId' | 'employeeId' | 'client'
  >): Promise<Appointment>
  deleteAppointment({ id }: Pick<Appointment, 'id'>): Promise<Appointment>
}

export { type IAppointmentServices }
