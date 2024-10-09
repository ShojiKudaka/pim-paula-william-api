import type { Employee, Service } from '@prisma/client'
import type { IServiceServices } from '../types/service-service'
import { prisma } from '../prisma/script'

class ServiceServices implements IServiceServices {
  async getAllServices(): Promise<Service[] | null> {
    const allServices = await prisma.service.findMany({
      include: {
        employees: true,
      },
    })

    return allServices || null
  }

  async getServiceById({ id }: Pick<Service, 'id'>): Promise<Service | null> {
    const service = await prisma.service.findUnique({
      where: { id },
      include: { employees: true },
    })

    return service || null
  }

  async createService({
    name,
    price,
  }: Pick<Service, 'name' | 'price'>): Promise<Service> {
    const newService = await prisma.service.create({
      data: {
        name,
        price,
      },
    })

    return newService
  }

  async addEmployeeToService({
    serviceId,
    employeeId,
  }: {
    serviceId: Service['id']
    employeeId: Employee['id']
  }): Promise<Service> {
    const serviceWithNewEmployee = await prisma.service.update({
      where: { id: serviceId },
      data: {
        employees: {
          connect: {
            id: employeeId,
          },
        },
      },
    })

    return serviceWithNewEmployee
  }

  async deleteService({ id }: Pick<Service, 'id'>): Promise<Service> {
    const deletedService = await prisma.service.delete({
      where: { id },
      include: {
        employees: true,
      },
    })

    return deletedService || null
  }
}

export { ServiceServices }
