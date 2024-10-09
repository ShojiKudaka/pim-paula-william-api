import type { Appointment } from '@prisma/client'
import type { IAppointmentServices } from '../types/appointment-service'
import { prisma } from '../prisma/script'

class AppointmentServices implements IAppointmentServices {
  async getAllAppointments(): Promise<Appointment[] | null> {
    const allAppointments = await prisma.appointment.findMany({
      include: {
        employee: true,
        service: true,
      },
    })

    return allAppointments || null
  }

  async getAppointmentById({
    id,
  }: Pick<Appointment, 'id'>): Promise<Appointment | null> {
    const appointment = await prisma.appointment.findUnique({
      where: { id },
      include: {
        employee: true,
        service: true,
      },
    })

    return appointment || null
  }

  async createAppointment({
    name,
    serviceId,
    employeeId,
    client,
  }: Pick<
    Appointment,
    'name' | 'serviceId' | 'employeeId' | 'client'
  >): Promise<Appointment> {
    const newAppointment = await prisma.appointment.create({
      data: {
        client,
        date: new Date(),
        name,
        employeeId,
        serviceId,
      },
    })

    return newAppointment
  }

  async deleteAppointment({
    id,
  }: Pick<Appointment, 'id'>): Promise<Appointment> {
    const deletedAppointment = await prisma.appointment.delete({
      where: { id },
      include: {
        employee: true,
        service: true,
      },
    })

    return deletedAppointment || null
  }
}

export { AppointmentServices }
