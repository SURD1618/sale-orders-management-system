# Sale Orders Management System

This repository contains the code for a Sale Orders Management System. The main objective of the project is to create a web application that allows users to manage sale orders efficiently. New sale orders can be created, viewed, and edited. The UI updates synchronously without requiring a page refresh.

## Description

The Sale Orders Management System is a web application built using React and Chakra UI. It leverages React Query for data fetching and state management. The application allows users to create, view, and manage sale orders seamlessly. It includes features such as:

- Creating new sale orders
- Viewing active sale orders
- Viewing completed sale orders
- Editing sale orders
- Synchronous UI updates for a smooth user experience

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library that gives you all the building blocks you need to build your React applications.
- **React Hook Form**: A performant, flexible, and extensible form library for React.
- **React Query**: Hooks for fetching, caching, and updating asynchronous data in React.
- **React Icons**: Include popular icons in your React projects easily.
- **React Datepicker**: A simple and reusable datepicker component for React.

## Project Structure

```
sale-order-management/
├── src/
│   ├── components/
│   │   ├── ActiveSaleOrders.js
│   │   ├── CompletedSaleOrders.js
│   │   ├── LoginPage.js
│   │   ├── MainPage.js
│   │   ├── SaleOrderForm.js
│   │   ├── SaleOrderModal.js
│   ├── hooks/
│   │   ├── useSaleOrders.js
│   │   └── useCustomers.js
│   ├── mockData/
│   │   ├── products.js
│   │   ├── saleOrders.js
│   │   └── customers.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── ...
```

## Setup Instructions

### Prerequisites

- Node.js and npm are installed on your machine.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/sale-orders-management-system.git
   cd sale-orders-management-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   The application will start and can be accessed at `http://localhost:3000`.

## Components

### `ActiveSaleOrders.js`

This component displays the list of active sale orders. It uses the `useSaleOrders` hook to fetch the sale orders and displays them in a table format. Users can open a modal to edit each order.

### `CompletedSaleOrders.js`

This component displays the list of completed sale orders. It also uses the `useSaleOrders` hook to fetch the sale orders and displays them in a table format.

### `LoginPage.js`

This component renders the login page for the application. Users can log in to access the main functionalities of the application.

### `MainPage.js`

This component serves as the main page of the application, providing an overview and navigation to different sections like active and completed sale orders.

### `SaleOrderForm.js`

This component renders a form for creating and editing sale orders. It uses `react-hook-form` for form handling and validation.

### `SaleOrderModal.js`

This component renders a modal that contains the `SaleOrderForm`. It is used to create or edit sale orders.

## Hooks

### `useSaleOrders.js`

This file contains custom hooks to manage sale orders:

- `useSaleOrders`: Fetches sale orders from a mock API.
- `useCreateSaleOrder`: Handles the creation of a new sale order and invalidates the query to update the sale orders list.

### `useCustomers.js`

This file contains a custom hook to manage customer data:

- `useCustomers`: Fetches customer data from a mock API.

## Mock Data

### `saleOrders.js`

This file contains mock data for sale orders used to simulate API responses.

### `products.js`

This file contains mock data for products used to simulate API responses.

### `customers.js`

This file contains mock data for customers used to simulate API responses.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
