import request from 'supertest'
import { app } from '../server'

describe('Appointment routes', () => {
  it('GET /appointment', async () => {
    const response = await request(app).get('/appointment')
    expect(response.status).toBe(200)
  })

  it('GET /appointment/:id', async () => {
    const response = await request(app).get('/appointment/1')
    expect(response.status).toBe(200)
  })

  it('POST /appointment', async () => {
    const response = await request(app).post('/appointment').send({
      name: 'Unha francesinha',
      client: 'Natalia',
      employeeId: 2,
      serviceId: 2,
    })

    expect(response.status).toBe(200)
  })

  it('DELETE /appointment/:id', async () => {
    const response = await request(app).delete('/appointment/1')

    expect(response.status).toBe(200)
  })
})
