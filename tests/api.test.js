const request = require('supertest')
const express = require('express')
const config = require('../src/config/app')
const { add, subtract, multiply, divide } = require('../src/utils/helper')

// Create the app for testing
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Husky Pro Application!',
    appName: config.appName,
    environment: config.environment,
    version: '1.0.0',
  })
})

app.post('/api/math/add', (req, res) => {
  try {
    const { a, b } = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = add(a, b)
    res.json({ operation: 'add', a, b, result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/math/subtract', (req, res) => {
  try {
    const { a, b } = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = subtract(a, b)
    res.json({ operation: 'subtract', a, b, result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/math/multiply', (req, res) => {
  try {
    const { a, b } = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = multiply(a, b)
    res.json({ operation: 'multiply', a, b, result })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/api/math/divide', (req, res) => {
  try {
    const { a, b } = req.body
    if (typeof a !== 'number' || typeof b !== 'number') {
      return res.status(400).json({ error: 'Both a and b must be numbers' })
    }
    const result = divide(a, b)
    res.json({ operation: 'divide', a, b, result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() })
})

describe('API Integration Tests', () => {
  describe('GET /', () => {
    it('should return application info', async () => {
      const response = await request(app).get('/')
      expect(response.status).toBe(200)
      expect(response.body).toMatchObject({
        message: 'Welcome to the Husky Pro Application!',
        appName: 'Husky Pro',
        environment: expect.any(String),
        version: '1.0.0',
      })
    })
  })

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health')
      expect(response.status).toBe(200)
      expect(response.body.status).toBe('healthy')
      expect(response.body.timestamp).toBeDefined()
    })
  })

  describe('POST /api/math/add', () => {
    it('should add two numbers', async () => {
      const response = await request(app).post('/api/math/add').send({ a: 5, b: 3 })

      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        operation: 'add',
        a: 5,
        b: 3,
        result: 8,
      })
    })

    it('should return error for invalid input', async () => {
      const response = await request(app).post('/api/math/add').send({ a: 'invalid', b: 3 })

      expect(response.status).toBe(400)
      expect(response.body.error).toBe('Both a and b must be numbers')
    })
  })

  describe('POST /api/math/divide', () => {
    it('should divide two numbers', async () => {
      const response = await request(app).post('/api/math/divide').send({ a: 10, b: 2 })

      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        operation: 'divide',
        a: 10,
        b: 2,
        result: 5,
      })
    })

    it('should return error for division by zero', async () => {
      const response = await request(app).post('/api/math/divide').send({ a: 10, b: 0 })

      expect(response.status).toBe(400)
      expect(response.body.error).toBe('Cannot divide by zero')
    })
  })
})
