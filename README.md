[README(3).md](https://github.com/user-attachments/files/32326768/README.3.md)
# Password Strength Checker 🔐

Password Strength Checker is a simple web application that helps users understand how strong their passwords are and create stronger ones using a built-in password generator.

I built this project to practice **React, Node.js, Express, MongoDB, authentication, and basic password security concepts** while creating something that can actually be used.

## What it can do

- Create a user account and log in
- Check the strength of a password
- Generate random passwords
- Copy generated passwords with one click
- Show password-strength feedback
- Protect pages that require login
- Store user accounts in MongoDB
- Hash passwords using bcryptjs
- Run the frontend and backend together during development

## Password Strength Checker

The checker looks at some basic password requirements:

- Minimum password length
- Lowercase letters
- Uppercase letters
- Numbers
- Special characters

Based on these checks, it displays a strength level such as **Very Weak, Weak, Medium, Strong, or Very Strong**.

The goal is not to replace a professional password-auditing tool, but to give users quick feedback when creating a password.

## Password Generator

The project also includes a password generator.

You can choose the password length and generate a random password containing different types of characters.

Currently, the generator supports passwords between **6 and 20 characters**.

There is also a copy button so the generated password can be copied directly to the clipboard.

## Authentication

The application has a basic signup and login system.

When a user creates an account, the password is hashed using **bcryptjs** before being stored in MongoDB.

The application also uses protected routes so pages such as the dashboard cannot be accessed normally without logging in.

The basic flow looks like this:

```text
Signup
   ↓
Password Hashing
   ↓
MongoDB
   ↓
Login
   ↓
Password Verification
   ↓
Dashboard
```

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Axios
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- CORS

### Deployment

- GitHub Pages
- GitHub Actions

## Project Structure

```text
PasswordStrength-Checker/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── Dashboard.js
│       ├── Generator.js
│       ├── Login.js
│       ├── Signup.js
│       ├── Meter.js
│       ├── Navbar.js
│       ├── PrivateRoute.js
│       ├── apiConfig.js
│       ├── global.css
│       └── index.js
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
│
├── package.json
└── README.md
```

## Running the project locally

First, clone the repository:

```bash
git clone https://github.com/hariomsingh045/PasswordStrength-Checker.git
```

Then move into the project folder:

```bash
cd PasswordStrength-Checker
```

Install the dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Then install the backend dependencies:

```bash
cd ../backend
npm install
```

### MongoDB

The backend uses MongoDB for storing registered users.

For local development, the project can use:

```text
mongodb://127.0.0.1:27017/passwordDB
```

You can also set your own MongoDB connection string using the `MONGO_URI` environment variable.

## Start the application

From the root directory:

```bash
npm start
```

This starts both the frontend and backend for development.

The frontend normally runs on:

```text
http://localhost:3000
```

and the backend runs on:

```text
http://localhost:5000
```

You can also run them separately if needed.

### Frontend

```bash
cd frontend
npm start
```

### Backend

```bash
cd backend
node server.js
```

## API

The backend currently has basic authentication endpoints.

### Signup

```http
POST /signup
```

Example:

```json
{
  "email": "user@example.com",
  "password": "StrongPassword123!"
}
```

### Login

```http
POST /login
```

Example:

```json
{
  "email": "user@example.com",
  "password": "StrongPassword123!"
}
```

## Deployment

The frontend is configured for GitHub Pages.

Repository:

https://github.com/hariomsingh045/PasswordStrength-Checker

The project also contains a GitHub Actions workflow for deployment.

For production, the backend API URL can be configured through:

```text
REACT_APP_API_URL
```

Example:

```text
REACT_APP_API_URL=https://your-backend-domain.com
```

## Why I made this project

I wanted to build a project that was related to **cybersecurity** but also gave me practical experience with full-stack development.

While working on it, I got to practice things like:

- Password hashing
- Authentication
- Protected routes
- API communication
- MongoDB
- React components
- Password generation
- Basic password-security concepts
- Deploying a web application

It also gave me a better understanding of how the frontend and backend communicate with each other.

## Future Improvements

There are still a few things I would like to add in the future:

- JWT authentication
- Forgot password functionality
- Email verification
- Password breach checking
- Better password-strength analysis
- Rate limiting
- More secure session management
- Improved mobile UI
- Security testing of the application

## Security

This project is mainly built for **learning and demonstration purposes**.

It should not be considered a production-ready authentication system without additional security controls such as HTTPS, rate limiting, secure cookies/tokens, input validation, and proper secret management.

## Author

**Hariom Singh**

Computer Science Undergraduate | Cybersecurity Enthusiast

GitHub:  
https://github.com/hariomsingh045

LinkedIn:  
https://www.linkedin.com/in/hariom-singh-75244b328/

---

If you like the project, feel free to ⭐ the repository.
