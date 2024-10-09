import type { Employee } from '@prisma/client'

interface IEmployeeServices {
  getAllEmployees(): Promise<Employee[] | null>
  getEmployeeById({ id }: Pick<Employee, 'id'>): Promise<Employee | null>
  createEmployee({ name }: Pick<Employee, 'name'>): Promise<Employee>
  deleteEmployee({ id }: Pick<Employee, 'id'>): Promise<Employee>
}

export { type IEmployeeServices }
