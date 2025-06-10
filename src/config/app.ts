interface Config {
  appName: string
  port: number
  environment: string
  db: {
    host: string
    port: number
    user: string
    password: string
    database: string
  }
  logging: {
    level: string
  }
}

const config: Config = {
  appName: 'Husky Pro',
  port: parseInt(process.env.PORT || '3000'),
  environment: process.env.NODE_ENV || 'development',
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'user',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'husky_pro_db',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
}

export default config
