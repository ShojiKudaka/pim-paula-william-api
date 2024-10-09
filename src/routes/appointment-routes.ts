import { Router, type Request, type Response } from 'express'
import { AppointmentServices } from '../services/appointment-services'
import type { Appointment } from '@prisma/client'

const appointmentRouter = Router()
const appointmentService = new AppointmentServices()

appointmentRouter.get('/', async (req: Request, res: Response) => {
  try {
    const allAppointments = await appointmentService.getAllAppointments()

    res.status(200).json(allAppointments)
  } catch (err) {
    res.status(400).send(err)
  }
})

appointmentRouter.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const appointment = await appointmentService.getAppointmentById({ id })

    res.status(200).json(appointment)
  } catch (err) {
    res.status(400).send(err)
  }
})

appointmentRouter.post('/', async (req: Request, res: Response) => {
  const { client, employeeId, name, serviceId } = req.body as Pick<
    Appointment,
    'name' | 'serviceId' | 'employeeId' | 'date' | 'client'
  >

  try {
    const newAppointment = await appointmentService.createAppointment({
      client,
      employeeId,
      name,
      serviceId,
    })

    res.status(200).json(newAppointment)
  } catch (err) {
    res.status(400).send(err)
  }
})

appointmentRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const deletedAppointment = await appointmentService.deleteAppointment({
      id,
    })

    res.status(200).json(deletedAppointment)
  } catch (err) {
    res.status(400).send(err)
  }
})

export { appointmentRouter }
