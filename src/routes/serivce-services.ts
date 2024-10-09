import { Router, type Request, type Response } from 'express'
import { ServiceServices } from '../services/service-services'
import type { Employee, Service } from '@prisma/client'

const serviceRouter = Router()
const serviceService = new ServiceServices()

serviceRouter.get('/', async (req: Request, res: Response) => {
  try {
    const allServices = await serviceService.getAllServices()

    res.status(200).json(allServices)
  } catch (err) {
    res.status(400).send(err)
  }
})

serviceRouter.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const service = await serviceService.getServiceById({ id })

    res.status(200).json(service)
  } catch (err) {
    res.status(400).send(err)
  }
})

serviceRouter.post('/', async (req: Request, res: Response) => {
  const { name, price } = req.body as Pick<Service, 'name' | 'price'>

  try {
    const newService = await serviceService.createService({
      name,
      price,
    })

    res.status(200).json(newService)
  } catch (err) {
    res.status(400).send(err)
  }
})

serviceRouter.patch('/:serviceId', async (req: Request, res: Response) => {
  const serviceId = Number(req.params.serviceId)
  const { employeeId } = req.body as { employeeId: Employee['id'] }

  try {
    const newService = await serviceService.addEmployeeToService({
      employeeId,
      serviceId,
    })

    res.status(200).json(newService)
  } catch (err) {
    res.status(400).send(err)
  }
})

serviceRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const deletedService = await serviceService.deleteService({
      id,
    })

    res.status(200).json(deletedService)
  } catch (err) {
    res.status(400).send(err)
  }
})

export { serviceRouter }
