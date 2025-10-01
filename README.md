# Glamora Backend

This is the backend for the Glamora fashion app. It is built using **Node.js**, **Express.js**, and **MongoDB**, providing APIs for user registration, login, and other functionalities.

---

## Features

- User **Registration** (Signup)
- User **Login** (Authentication)
- Connection to **MongoDB** database
- RESTful API structure
- Error handling and validation

---

## Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework for Node.js
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling for Node.js
- **bcryptjs** – Password hashing
- **jsonwebtoken** – Authentication tokens

---

## Project Structure

Backend/
│
├── Models/ # Mongoose schemas
│ └── user.models.js # User model (name, email, password, etc.)
│
├── Routes/ # API routes
│ ├── auth.routes.js # Routes for login and registration
│ └── other.routes.js # Additional routes if any
│
├── Controllers/ # Optional: logic for handling requests
│ └── auth.controller.js # Functions for login/register
│
├── Middleware/ # Optional: auth middleware, validation
│ └── auth.middleware.js
│
├── server.js # Main server file (Express app setup)
├── package.json # Project dependencies and scripts
├── package-lock.json # Dependency lock file
└── .env # Environment variables (MongoDB URI, JWT secret

