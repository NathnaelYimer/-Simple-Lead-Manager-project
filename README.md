# Simple Lead Manager

This project is a simple Lead Management API with a basic frontend to interact with it. It is built using Node.js, Express, Next.js, and MongoDB (Mongoose).

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

The database used is MongoDB with Mongoose for ORM.

## How to Run the Project Locally

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/NathnaelYimer/-Simple-Lead-Manager-project.git
    cd -Simple-Lead-Manager-project
    ```

2. Install dependencies for both frontend and backend:
    ```sh
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the `backend` directory with the following content:
    ```env
    MONGODB_URI=<your-mongodb-uri>
    PORT=5000
    ```

4. Run the backend:
    ```sh
    cd backend
    npm run dev
    ```

5. Run the frontend:
    ```sh
    cd frontend
    npm run dev
    ```

### Access the Application

- Backend API: `http://localhost:5000`
- Frontend: `http://localhost:3000`

### Optional Deployment

- Deploy the frontend to Vercel.
- Deploy the backend to Railway, Render, or Heroku.

## Submission

- [GitHub Repo](https://github.com/NathnaelYimer/-Simple-Lead-Manager-project)
- (Optional) [Live Link](<deployed-url>)

## License

This project is licensed under the MIT License.
