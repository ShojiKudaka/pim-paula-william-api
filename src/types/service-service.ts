import type { Employee, Service } from '@prisma/client'

interface IServiceServices {
  getAllServices(): Promise<Service[] | null>
  getServiceById({ id }: Pick<Service, 'id'>): Promise<Service | null>
  createService({
    name,
    price,
  }: Pick<Service, 'name' | 'price'>): Promise<Service>
  addEmployeeToService({
    serviceId,
    employeeId,
  }: {
    serviceId: Service['id']
    employeeId: Employee['id']
  }): Promise<Service>
  deleteService({ id }: Pick<Service, 'id'>): Promise<Service>
}

export { type IServiceServices }
