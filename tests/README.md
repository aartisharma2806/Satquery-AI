# SatQuery AI — Testing Suite

This directory contains test suites for SatQuery AI.

## Current Tests

### 1. Backend Health Check Verification
A lightweight verification script (`healthCheck.test.js`) is provided to test the backend API health-check endpoint `GET /api/health`.

To run the verification test:
```bash
# Ensure server is running on port 5000, then:
node tests/healthCheck.test.js
```

## Future Testing Scope

- **Unit Tests**: Controllers, routing engine, and response formatters.
- **Integration Tests**: Mongoose database queries and upload validation pipeline.
- **Frontend Component Tests**: Component rendering and navigation flow using Vitest / React Testing Library.
- **AI Service Contract Tests**: Validating schema payloads exchanged with the Python AI microservice.
