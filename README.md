# Reflection

In this project, TypeScript features and object-oriented programming principles were applied to create an E-commerce Product Management System. TypeScript’s strong typing ensured better code reliability by defining explicit data types for product properties and function parameters. The Product class was built using OOP concepts such as encapsulation and methods like displayDetails() and getPriceWithDiscount(), which handle product-specific behavior. This approach made the code modular and easy to maintain.

The utilities for discount and tax calculations demonstrated separation of concerns. Each utility handled a single, well-defined task, making the logic reusable across different parts of the application. TypeScript’s modular structure also simplified imports and code organization. Default tax rates were applied with conditional logic for “groceries,” showing how small business rules can be integrated cleanly.

Asynchronous programming was handled using async/await in the API service. This ensured smooth communication with the DummyJSON API and better error readability compared to traditional promise chains. Custom error handling was implemented using a dedicated AppError class to provide more control and consistent error messages. The try/catch blocks in the service and main file helped capture network issues or unexpected responses gracefully.

One main challenge was managing async API calls while maintaining type safety, especially when the API response structure could vary. This was solved by using generic typing and object destructuring to map the data properly. Another challenge was ensuring all modules compiled correctly with TypeScript’s strict mode. Debugging type errors early helped avoid runtime issues later.

Overall, the project demonstrated how TypeScript’s static typing, OOP structure, and async features improve code quality, maintainability, and reliability in real-world applications.
