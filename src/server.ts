import express from 'express'
import cors from 'cors'
import { employeeRouter } from './routes/employee-routes'
import { serviceRouter } from './routes/serivce-services'
import { appointmentRouter } from './routes/appointment-routes'

export const app = express()

const PORT = process.env.PORT ? Number(process.env.PORT) : 3333

app.use(cors())
app.use(express.json())

app.use('/employee', employeeRouter)
app.use('/service', serviceRouter)
app.use('/appointment', appointmentRouter)

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`)
})
