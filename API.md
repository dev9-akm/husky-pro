# API Documentation

## Endpoints

### GET /

Returns basic application information.

**Response:**

```json
{
  "message": "Welcome to the Husky Pro Application!",
  "appName": "Husky Pro",
  "environment": "development",
  "version": "1.0.0"
}
```

### GET /health

Health check endpoint.

**Response:**

```json
{
  "status": "healthy",
  "timestamp": "2025-06-11T10:30:00.000Z"
}
```

### POST /api/math/add

Adds two numbers.

**Request Body:**

```json
{
  "a": 5,
  "b": 3
}
```

**Response:**

```json
{
  "operation": "add",
  "a": 5,
  "b": 3,
  "result": 8
}
```

### POST /api/math/subtract

Subtracts two numbers.

**Request Body:**

```json
{
  "a": 10,
  "b": 4
}
```

**Response:**

```json
{
  "operation": "subtract",
  "a": 10,
  "b": 4,
  "result": 6
}
```

### POST /api/math/multiply

Multiplies two numbers.

**Request Body:**

```json
{
  "a": 6,
  "b": 7
}
```

**Response:**

```json
{
  "operation": "multiply",
  "a": 6,
  "b": 7,
  "result": 42
}
```

### POST /api/math/divide

Divides two numbers.

**Request Body:**

```json
{
  "a": 15,
  "b": 3
}
```

**Response:**

```json
{
  "operation": "divide",
  "a": 15,
  "b": 3,
  "result": 5
}
```

**Error Response (Division by zero):**

```json
{
  "error": "Cannot divide by zero"
}
```
