# Uday Garments

## Overview

Uday Garments is a full-stack e-commerce web application that provides a seamless platform for managing an online clothing store. It offers features like user authentication, role-based access control (RBAC), and dynamic user interactions, ensuring a secure and user-friendly shopping experience.

## Features

1. **Authentication and Authorization**:
   - User registration and login using JWT-based authentication.
   - Secure password storage using hashing.
   - Session management for logged-in users.

2. **Role-Based Access Control (RBAC)**:
   - Role hierarchy includes Admin, Seller, and Customer.
   - Admins manage users and products.
   - Sellers can list and manage products.
   - Customers browse, purchase, and view order history.

3. **E-Commerce Functionality**:
   - Product browsing, filtering, and sorting.
   - Shopping cart and checkout process.
   - Order management for all roles.

4. **Technology Stack**:
   - **Frontend**: React.js for a dynamic and responsive UI.
   - **Backend**: Node.js with Express.js for server-side logic.
   - **Database**: MongoDB for data storage and retrieval.

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/UdaySutradhar/Uday-Garments.git
   cd Uday-Garments/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add the following:
   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm start
   ```

## Usage
1. Open `http://localhost:3000` in your browser for the frontend interface.
2. Backend API will run on `http://localhost:5000`.

## Deployment
The application can be deployed using platforms like Heroku (backend) and Vercel/Netlify (frontend). Update `.env` variables and configure deployment settings accordingly.

## Contributing
Feel free to fork this repository, raise issues, and submit pull requests. Contributions are welcome to enhance features and functionality.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Let me know if you need additional sections or modifications!
