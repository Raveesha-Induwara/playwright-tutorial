# QA Testing Project

A Playwright-based end-to-end testing framework for web applications.

## Overview

This project uses [Playwright](https://playwright.dev/) to perform automated testing across multiple browsers (Chromium, Firefox, and WebKit). The tests are configured to run in parallel and include CI/CD integration via GitHub Actions.

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Local Development
```bash
# Run all tests
npx playwright test

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run specific test file
npx playwright test tests/example.spec.ts

# Run tests in specific browser
npx playwright test --project=chromium
```

### View Test Reports
```bash
# Open HTML report
npx playwright show-report
```

## Project Structure

```
QA/
├── .github/workflows/     # GitHub Actions CI/CD
├── tests/                 # Test files
│   └── example.spec.ts   # Sample test cases
├── playwright-report/     # Generated test reports
├── test-results/         # Test execution artifacts
├── playwright.config.ts  # Playwright configuration
└── package.json          # Project dependencies
```

## Configuration

The project is configured to:
- Run tests across Chromium, Firefox, and WebKit browsers
- Execute tests in parallel for faster execution
- Generate HTML reports with trace collection on failures
- Retry failed tests twice in CI environment

## CI/CD

GitHub Actions workflow automatically:
- Runs tests on push/PR to main/master branches
- Installs dependencies and Playwright browsers
- Executes test suite
- Uploads test reports as artifacts

## Writing Tests

Tests are located in the `tests/` directory. Example test structure:

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Expected Title/);
});
```

## Browser Support

- **Chromium** - Desktop Chrome
- **Firefox** - Desktop Firefox  
- **WebKit** - Desktop Safari

## License

ISC