import request from 'supertest'
import { app } from '../server'

describe('Employee routes', () => {
  it('GET /employee', async () => {
    const response = await request(app).get('/employee')
    expect(response.status).toBe(200)
  })

  it('GET /employee/:id', async () => {
    const response = await request(app).get('/employee/1')
    expect(response.status).toBe(200)
  })

  it('POST /employee', async () => {
    const response = await request(app).post('/employee').send({
      name: 'João',
    })

    expect(response.status).toBe(200)
  })

  it('DELETE /employee/:id', async () => {
    const response = await request(app).delete('/employee/1')

    expect(response.status).toBe(200)
  })
})
