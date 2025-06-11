# husky-pro

## Overview

This is a complete Node.js application that demonstrates best practices using:

- **Husky** for managing Git hooks
- **ESLint** for code linting
- **Prettier** for code formatting
- **lint-staged** for running linters on pre-commit
- **Jest** for testing with coverage
- **TypeScript** for type checking
- **Express.js** for the REST API
- **Supertest** for API testing

## Features

- ✅ RESTful API with math operations
- ✅ Comprehensive test coverage (100% statement coverage)
- ✅ TypeScript type checking
- ✅ Pre-commit hooks for code quality
- ✅ ESLint and Prettier integration
- ✅ Health check endpoint
- ✅ Environment configuration
- ✅ API documentation

## Quick Start

1. **Clone and install:**

   ```bash
   git clone https://github.com/dev9-akm/husky-pro.git
   cd husky-pro
   npm install
   ```

2. **Run the application:**

   ```bash
   npm run dev        # Development mode with hot reload
   npm start          # Production mode
   ```

3. **Test the application:**
   ```bash
   npm test           # Run all tests with coverage
   npm run lint       # Check code quality
   npm run typecheck  # Check TypeScript types
   ```

## ESLint Configuration

This project uses ESLint v9 with the new flat config format (`eslint.config.js`) that supports both JavaScript and TypeScript files:

- **JavaScript files** (`**/*.js`): Uses CommonJS module system with Node.js globals
- **TypeScript files** (`**/*.ts`): Uses ES modules with TypeScript-specific rules
- **Test files** (`tests/**/*.{js,ts}`): Additional Jest globals and relaxed console rules
- **Ignored files**: `node_modules/`, `dist/`, `build/`, `coverage/`, `*.min.js`, `.env` files

### Available Lint Commands:

- `npm run lint` - Lint all JS and TS files with auto-fix
- `npm run lint:js` - Lint only JavaScript files
- `npm run lint:ts` - Lint only TypeScript files in src/
- `npm run lint:check` - Check all files without auto-fix

## API Endpoints

The application provides a math API with the following endpoints:

- `GET /` - Application information
- `GET /health` - Health check
- `POST /api/math/add` - Add two numbers
- `POST /api/math/subtract` - Subtract two numbers
- `POST /api/math/multiply` - Multiply two numbers
- `POST /api/math/divide` - Divide two numbers

See [API.md](API.md) for detailed API documentation.

## Development Workflow

This project enforces code quality through Git hooks:

1. **Pre-commit hook** runs:

   - lint-staged (ESLint + Prettier on staged files)
   - TypeScript type checking

2. **Post-commit hook** displays:
   - Commit information
   - File changes summary

## Project Structure

```
husky-pro/
├── src/
│   ├── index.js              # Main Express application
│   ├── index.ts              # TypeScript version (for type checking)
│   ├── config/
│   │   ├── app.js            # Application configuration
│   │   └── app.ts            # TypeScript configuration
│   └── utils/
│       ├── helper.js         # Math utility functions
│       └── helper.ts         # TypeScript utilities
├── tests/
│   ├── index.test.js         # Unit tests for helper functions
│   └── api.test.js           # Integration tests for API endpoints
├── .husky/
│   ├── pre-commit            # Pre-commit hook script
│   └── post-commit           # Post-commit hook script
├── coverage/                 # Test coverage reports
├── eslint.config.js          # ESLint configuration (v9 format)
├── .prettierrc               # Prettier configuration
├── .lintstagedrc.json        # lint-staged configuration
├── jest.config.json          # Jest testing configuration
├── tsconfig.json             # TypeScript configuration
├── .env.example              # Environment variables template
├── API.md                    # API documentation
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm test` - Run all tests with coverage
- `npm run lint` - Run ESLint and fix issues
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types
- `npm run lint-staged` - Run linters on staged files
- `npm run prepare` - Install Husky hooks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Check linting: `npm run lint`
6. Commit your changes (hooks will run automatically)
7. Push and create a pull request

## License

ISC License
