# E-Commerce Web Automation Framework

## Project Overview

This project is an end-to-end web automation framework developed using Playwright with TypeScript.

The framework automates an e-commerce application and covers important user workflows including login, product validation, cart operations, and checkout.

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- Playwright HTML Reporter

## Framework Design

The project follows the Page Object Model (POM) design pattern and uses Playwright fixtures for reusable test setup.

## Project Structure

```text
├── fixtures
│   └── test-fixtures.ts
│
├── pages
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data
│   └── users.ts
│
├── tests
│   ├── login.spec.ts
│   ├── products.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md