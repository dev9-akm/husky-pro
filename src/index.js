// filepath: /home/akm/Desktop/husky-pro/src/index.js
const express = require('express')
const app = express()
const config = require('./config/app')
const { add, subtract, multiply, divide } = require('./utils/helper')

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Husky Pro Application!',
    appName: config.appName,
    environment: config.environment,
    version: '1.0.0',
  })
})

// Math API endpoints
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() })
})

const PORT = config.port || 3000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
