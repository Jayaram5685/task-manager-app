# 🚀 TaskFlow: A Full-Stack MERN Task Management Application

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

**TaskFlow** is a secure, multi-user, full-stack web application designed for efficient task management. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it provides a clean, modern, and fully responsive interface for users to organize their daily tasks. The application features robust user authentication and ensures that each user's data is private and secure.

## 🔴 Live Demo

**Experience the live application here:**
### [https://task-manager-app-zeta-eight.vercel.app/](https://task-manager-app-zeta-eight.vercel.app/)

---

## 📸 Application Preview

![TaskFlow Application Screenshot](./images/Screenshot%202025-10-06%20224849.png)

---

## ✨ Key Features

-   **Secure User Authentication:** Users can register and log in via a secure system featuring password hashing (`bcryptjs`) and session management with JSON Web Tokens (JWT).
-   **Full CRUD Functionality:** Authenticated users have complete control over their tasks, with the ability to Create, Read, Update, and Delete items.
-   **Protected API Routes:** The backend API is secured with middleware to ensure that users can only access and manipulate their own data.
-   **Modern & Responsive UI:** A sleek dark-mode interface built with React that provides a seamless experience on both desktop and mobile devices.
-   **Intuitive Task Management:** Features an interactive checklist for marking tasks as complete, along with the ability to edit task descriptions on the fly.

---

## 🛠️ Technology Stack

This project leverages a modern and powerful set of technologies:

| Category      | Technology                                    |
| ------------- | --------------------------------------------- |
| **Frontend** | `React.js`, `React Router`, `Axios`, `React Icons`, `CSS3` |
| **Backend** | `Node.js`, `Express.js`                       |
| **Database** | `MongoDB` with `Mongoose`                     |
| **Authentication** | `JSON Web Tokens (JWT)`, `bcryptjs`           |
| **Deployment** | `Vercel` (Frontend), `Render` (Backend)       |

---

## ⚙️ Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

-   Node.js installed on your machine: [Download Node.js](https://nodejs.org/en/)
-   A MongoDB Atlas account for the database: [Create an account](https://www.mongodb.com/cloud/atlas/register)

### Installation & Setup

1.  **Clone the GitHub repository:**
    ```sh
    git clone [https://github.com/Jayaram5685/task-manager-app.git](https://github.com/Jayaram5685/task-manager-app.git)
    cd task-manager-app
    ```

2.  **Configure the Backend:**
    -   Navigate to the backend directory: `cd backend`
    -   Install the required packages: `npm install`
    -   Create a `.env` file and add your secret keys for the database and JWT:
        ```env
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_super_secret_key
        ```

3.  **Configure the Frontend:**
    -   Navigate to the frontend directory: `cd ../frontend`
    -   Install the required packages: `npm install`

### Running the Application

1.  **Start the Backend Server:**
    -   From the `backend` directory, run:
        ```sh
        node server.js
        ```
    -   The server will start on `http://localhost:5000`.

2.  **Start the Frontend Client:**
    -   From the `frontend` directory, run:
        ```sh
        npm start
        ```
    -   The application will automatically open in your browser at `http://localhost:3000`.

---

## ✒️ Author

**Jaya Ram**

-   **GitHub:** [@Jayaram5685](https://github.com/Jayaram5685)
-   **LinkedIn:** [linkedin.com/in/jaya-ram-774646314](https://www.linkedin.com/in/jaya-ram-774646314)

---

## 📄 License

This project is open-source and licensed under the MIT License.
