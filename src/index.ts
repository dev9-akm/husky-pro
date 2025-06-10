import express, { Request, Response } from 'express'
import config from './config/app'
import { add, subtract, multiply, divide } from './utils/helper'

const app = express()

app.use(express.json())

interface MathRequest {
  a: number
  b: number
}

interface MathResponse {
  operation: string
  a: number
  b: number
  result: number
}

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the Husky Pro Application!',
    appName: config.appName,
    environment: config.environment,
    version: '1.0.0',
  })
})

// Math API endpoints
app.post('/api/math/add', (req: Request, res: Response) => {
  try {
    const { a, b }: MathRequest = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = add(a, b)
    const response: MathResponse = { operation: 'add', a, b, result }
    res.json(response)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

app.post('/api/math/subtract', (req: Request, res: Response) => {
  try {
    const { a, b }: MathRequest = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = subtract(a, b)
    const response: MathResponse = { operation: 'subtract', a, b, result }
    res.json(response)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

app.post('/api/math/multiply', (req: Request, res: Response) => {
  try {
    const { a, b }: MathRequest = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = multiply(a, b)
    const response: MathResponse = { operation: 'multiply', a, b, result }
    res.json(response)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
})

app.post('/api/math/divide', (req: Request, res: Response) => {
  try {
    const { a, b }: MathRequest = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = divide(a, b)
    const response: MathResponse = { operation: 'divide', a, b, result }
    res.json(response)
  } catch (error) {
    res.status(400).json({ error: (error as Error).message })
  }
})

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() })
})

const PORT = config.port || 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
