# Simple Lead Manager

This project is a simple Lead Management API with a basic frontend to interact with it. It is built using Node.js, Express, Next.js, and MySQL (Sequelize).

## Requirements

### Backend (Node.js & Express)

The backend is set up with a simple REST API with two endpoints:
- `POST /leads` → Add a new lead
- `GET /leads` → Fetch all leads

Each lead has the following fields:
- `name` (string, required)
- `email` (string, required, unique)
- `status` (enum: "New", "Engaged", "Proposal Sent", "Closed-Won", "Closed-Lost")
- `createdAt` (timestamp)

### Frontend (Next.js)

The frontend displays the list of leads from the API and has a simple form to add a new lead.

### Database

The database used is MySQL with Sequelize for ORM.

## How to Run the Project Locally

### Prerequisites

- Node.js (v14 or higher)
- MySQL

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/NathnaelYimer/-Simple-Lead-Manager-project.git
    cd -Simple-Lead-Manager-project
    ```

2. Set Up the Backend:
    1. Navigate to the `backend` directory:
        ```sh
        cd backend
        ```
    2. Install the dependencies:
        ```sh
        npm install
        ```
    3. Create a `.env` file in the `backend` directory with the following content:
        ```env
        DATABASE_URL=mysql://<username>:<password>@localhost:3306/leadmanager
        PORT=5000
        ```
    4. Run the backend server:
        ```sh
        npm run dev
        ```

3. Set Up the Frontend:
    1. Navigate to the `frontend` directory:
        ```sh
        cd ../frontend
        ```
    2. Install the dependencies:
        ```sh
        npm install
        ```
    3. Create a `.env.local` file in the `frontend` directory with the following content:
        ```env
        NEXT_PUBLIC_API_URL=http://localhost:5000/leads
        ```
    4. Run the frontend server:
        ```sh
        npm run dev
        ```

### Access the Application

- Backend API: `http://localhost:5000`
- Frontend: `http://localhost:3000`
