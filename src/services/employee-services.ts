import type { Employee } from '@prisma/client'
import type { IEmployeeServices } from '../types/employee-service'
import { prisma } from '../prisma/script'

class EmployeeServices implements IEmployeeServices {
  async getAllEmployees(): Promise<Employee[] | null> {
    const allEmployees = await prisma.employee.findMany({
      include: {
        services: true,
      },
    })

    return allEmployees || null
  }

  async getEmployeeById({
    id,
  }: Pick<Employee, 'id'>): Promise<Employee | null> {
    const employee = await prisma.employee.findUnique({
      where: { id },
      include: {
        services: true,
      },
    })

    return employee || null
  }

  async createEmployee({ name }: Pick<Employee, 'name'>): Promise<Employee> {
    const newEmployee = await prisma.employee.create({
      data: {
        name,
      },
    })

    return newEmployee
  }

  async deleteEmployee({ id }: Pick<Employee, 'id'>): Promise<Employee> {
    const deletedEmployee = await prisma.employee.delete({
      where: { id },
      include: {
        services: true,
      },
    })

    return deletedEmployee || null
  }
}

export { EmployeeServices }
