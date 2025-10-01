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
├── config/                  # Configuration files
│   └── db.js                # MongoDB connection setup
│
├── controllers/             # Controllers contain request logic
│   └── auth.controller.js   # Functions for register/login
│
├── middleware/              # Middleware for authentication & validation
│   └── auth.middleware.js
│
├── models/                  # Mongoose schemas
│   └── user.model.js
│
├── routes/                  # API routes
│   └── auth.routes.js       # Routes for login/register
│
├── utils/                   # Utility functions
│   └── generateToken.js     # JWT token generation
│
├── .env                     # Environment variables (Mongo URI, JWT secret, PORT)
├── .gitignore               # Files/folders to ignore (node_modules, logs, etc.)
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Dependency lock file
└── server.js                # Entry point: initializes Express app and server


