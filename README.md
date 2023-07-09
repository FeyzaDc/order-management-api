# Order Management API

This project provides an API for order management. You can create, update, and delete customer information and customer's orders. The data is stored in a PostgreSQL database.

Once the project is running, you can access the API at http://localhost:3000.

## Usage

You can perform customer and order operations by sending HTTP requests to the API. You can use the following endpoints for different operations:

- `GET /customers` : Retrieves a list of all customers.
- `GET /customers/:customerId` : Retrieves details of a specific customer.
- `POST /customers` : Creates a new customer.
- `PUT /customers/:customerId` : Updates information of a customer.
- `DELETE /customers/:customerId` : Deletes a customer.
- `GET /customers/:customerId/orders` : Retrieves all orders for a specific customer.
- `GET /customers/:customerId/orders/:orderId` : Retrieves details of a specific order for a specific customer.
- `POST /customers/:customerId/orders` : Creates a new order for a specific customer.
- `PUT /customers/:customerId/orders/:orderId` : Updates a specific order for a specific customer.
- `DELETE /customers/:customerId/orders/:orderId` : Deletes a specific order for a specific customer.
