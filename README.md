# Monday Assignment - Office Management

Full stack application implementing Office Management using **Spring Boot** and **React**.

## Features Implemented
- **Display Available Offices**: Dynamic table showing all office records (Name, Office Number).
- **Search Feature**: Search by office name or office number.
- **Action Column**:
  - **Delete**: Remove an office record and update the table in real-time.
  - **Update**: Button placed (placeholder for upcoming class).

---

## Project Structure

```
Monday_assignment-/
├── backend/       # Spring Boot Application (Port 8082)
└── frontend/      # React + Vite Application (Port 5173)
```

---

## How to Run

### 1. Backend (Spring Boot)
Ensure PostgreSQL is running and database `clinic` exists.
```bash
cd backend
./mvnw spring-boot:run
```
The server will start on `http://localhost:8082`.

### 2. Frontend (React)
```bash
cd frontend
npm install
npm run dev
```
Open your browser at `http://localhost:5173`.
