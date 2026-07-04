Backend Development with Java and Spring Boot
=============================================

As part of my training in backend development, I built a robust REST API using **Java** and **Spring Boot**, applying modern backend architecture and enterprise development standards.

This project demonstrates my ability to:

-   **Design and build a scalable REST API** using **Spring Boot**, implementing a professional architecture (Controllers, Services, Repositories).

-   **Implement full CRUD operations** for resource management, following RESTful conventions and utilizing **Spring Data JPA/Hibernate** for database interactions.

-   **Implement security and authentication** using **Spring Security**, protecting endpoints and managing user roles effectively.

-   **Manage database connectivity**, handling data persistence, entities, and relationships within a relational database context.

-   **Implement professional error handling**, using `@ControllerAdvice` for centralized exception management and meaningful HTTP status codes.

-   **Dependency Management and Configuration**, using **Maven/Gradle** to manage libraries and `application.properties/yml` for environment-specific configurations.

The API focuses on clean code, testability, and enterprise-grade architecture, mirroring the patterns used in high-performance Java backend systems.

🛠 Technologies Used
--------------------

-   **Java**

-   **Spring Boot**

-   **Spring Data JPA / Hibernate**

-   **Spring Security**

-   **Maven/Gradle**

-   **RESTful API design**

🧪 What I Learned
-----------------

This project helped solidify my understanding of:

-   The Spring ecosystem and Inversion of Control (IoC/DI)

-   Relational database management with ORMs

-   Secure API development and user authentication

-   Modular architecture in Java

-   Centralized error management

-   Enterprise backend standards

💡 This project reflects backend development skills applicable to Backend Developer or Fullstack roles focused on building secure and scalable Java applications.Node.js Backend Final Project -- REST API with Firebase, Express, and JWT
========================================================================

This project implements a complete REST API to manage products stored in Cloud Firestore, fulfilling the requirements for the Node.js course final project. It includes JWT authentication, error handling, layered architecture, and protected routes.

🚀 Core Technologies
--------------------

-   **Node.js + Express**

-   **Firebase Admin (Firestore)**

-   **JWT (jsonwebtoken)**

-   **dotenv**

-   **CORS + body-parser**

📂 Project Architecture
-----------------------

Layered structure for clean and scalable code:

Plaintext

```
src/
├── config/          -> Firebase configuration
├── routes/          -> Express routes (auth and products)
├── controllers/     -> Logic for each endpoint
├── services/        -> Validations and business logic
├── models/          -> Firestore access
├── middlewares/     -> Auth + error handling
└── index.js         -> Main server

```

🔐 Authentication
-----------------

-   **Login:** `/auth/login`.

-   Verifies credentials.

-   Generates a **Bearer JWT**.

-   Protected routes use the `authenticate` middleware.

🗃️ Firebase Connection
-----------------------

-   Project created via Firebase Console.

-   Uses `firebase-admin` (server-side).

-   Environment variables loaded from `.env`.

*Example `.env.example`:*

Fragmento de código

```
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY="private key string"
PORT=3000
JWT_SECRET=

```

📦 Product Endpoints
--------------------

All endpoints are under `/api/products`.

-   `GET /api/products` -- Retrieve all products.

-   `GET /api/products/:id` -- Retrieve a product by ID.

-   `POST /api/products/create` (protected) -- Create a new product.

-   `DELETE /api/products/:id` (protected) -- Delete a product.

🧠 Core Logic
-------------

-   **Services:** Validate input data, set default values (category, description, etc.), and throw errors with `{ status, message }`.

-   **Models:** Direct connection to Firestore using `collection()`, `doc()`, `get()`, `add()`, `delete()`, and `update()`.

❗ Error Handling
----------------

Custom middlewares included:

-   `notFound`: Returns 404 for non-existent routes.

-   `errorHandler`: Catches errors and sends standardized responses.

-   Controllers use `try/catch` and delegate errors via `next(err)`.

🔒 HTTP Status Codes Used
-------------------------

-   **200**: OK

-   **201**: Created (POST)

-   **400**: Bad Request (Invalid data)

-   **401**: Unauthorized (Invalid/missing token)

-   **403**: Forbidden

-   **404**: Not Found

-   **500**: Internal Server Error

📝 Useful Scripts
-----------------

Defined in `package.json`:

-   `dev`: `node --watch src/index.js`

-   `prod`: `node src/index.js`

✔️ Project Status
-----------------

All final project requirements were met:

-   Modular architecture

-   Firebase integrated

-   Full CRUD

-   JWT authentication

-   Middlewares implemented

-   Proper error handling

📌 Final Remarks
----------------

The project is clean, modular, and easy to extend (e.g., adding PUT requests, extra validations, or user roles).

![](https://portfolio-4oh.pages.dev/images/cert-node.jpg)