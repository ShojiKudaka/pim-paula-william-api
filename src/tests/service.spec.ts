import request from 'supertest'
import { app } from '../server'

describe('Service routes', () => {
  it('GET /service', async () => {
    const response = await request(app).get('/service')
    expect(response.status).toBe(200)
  })

  it('GET /service/:id', async () => {
    const response = await request(app).get('/service/1')
    expect(response.status).toBe(200)
  })

  it('POST /service', async () => {
    const response = await request(app).post('/service').send({
      name: 'Esmaltação',
      price: 70,
    })

    expect(response.status).toBe(200)
  })

  it('PATCH /service/:id', async () => {
    const response = await request(app).patch('/service/1').send({
      employeeId: 2,
    })

    expect(response.status).toBe(200)
  })

  it('DELETE /service/:id', async () => {
    const response = await request(app).delete('/service/1')

    expect(response.status).toBe(200)
  })
})
