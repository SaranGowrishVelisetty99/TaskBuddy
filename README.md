# TaskBuddy

A full-stack Todo application built using the **MERN stack**. This app allows users to manage tasks efficiently by creating, editing, completing, and deleting todos along with detailed descriptions. It features a clean UI and real-time updates powered by a RESTful backend.

---

## Features

- Add new tasks with a **title and description**
- Edit existing task titles and descriptions
- Mark tasks as **Completed** or **Pending**
- Delete tasks
- Scrollable, card-style task list
- Real-time UI updates after CRUD operations
- RESTful API-based architecture

---

## Tech Stack

### Frontend
- **React.js** – Component-based UI development
- **Axios** – Handling HTTP requests
- **CSS** – Styling and layout

### Backend
- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **CORS** – Cross-origin resource sharing

---

## Project Structure

mern-todo-app/
│
├── server/
│ └── Server.js
│
├── client/
│ ├── src/
│ │ ├── components/
│ │ │ ├── TodoForm.js
│ │ │ └── Header.js
│ │ ├── App.js
│ │ └── App.css
│ └── package.json
│
└── README.md


---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
## Backend Setup
cd server
npm install
node Server.js
Backend server runs on http://localhost:5000

Ensure your MongoDB connection string is correctly configured in Server.js

## Front-end Setup
cd client
npm install
npm start
React app runs on http://localhost:3000

## API Endpoints
Method	Endpoint	Description
GET	/todos	Fetch all todos
POST	/todos	Create a new todo
PUT	/todos/:id	Update a todo
DELETE	/todos/:id	Delete a todo
