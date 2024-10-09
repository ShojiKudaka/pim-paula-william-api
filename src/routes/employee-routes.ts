import { Router, type Request, type Response } from 'express'
import { EmployeeServices } from '../services/employee-services'
import type { Employee } from '@prisma/client'

const employeeRouter = Router()
const employeeService = new EmployeeServices()

employeeRouter.get('/', async (req: Request, res: Response) => {
  try {
    const allEmployees = await employeeService.getAllEmployees()

    res.status(200).json(allEmployees)
  } catch (err) {
    res.status(400).send(err)
  }
})

employeeRouter.get('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const employee = await employeeService.getEmployeeById({ id })

    res.status(200).json(employee)
  } catch (err) {
    res.status(400).send(err)
  }
})

employeeRouter.post('/', async (req: Request, res: Response) => {
  const { name } = req.body as Pick<Employee, 'name'>

  try {
    const newEmployee = await employeeService.createEmployee({
      name,
    })

    res.status(200).json(newEmployee)
  } catch (err) {
    res.status(400).send(err)
  }
})

employeeRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  try {
    const deletedEmployee = await employeeService.deleteEmployee({
      id,
    })

    res.status(200).json(deletedEmployee)
  } catch (err) {
    res.status(400).send(err)
  }
})

export { employeeRouter }
