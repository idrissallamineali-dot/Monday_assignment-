# Web Technology Lab Assignment — Clinic Office Management

**Course:** Web Technology  
**Assignment:** Office Management (Backend & Frontend Integration)  
**Student Name:** Idriss Allamine Ali  
**Student ID:** 27836  

---

## 📌 Project Overview

This project is a full-stack web application designed to manage clinic offices. It connects a **Spring Boot** REST API backend with a **React + Vite** frontend to perform CRUD operations, data searching, and real-time UI updates.

### Assignment Requirements:
* [x] **Display Available Offices:** Dynamic table listing all offices (Name and Office Number).
* [x] **Search Feature:** Filter offices in real-time by either office name or office number.
* [x] **Action Column (Delete):** Remove an office record with immediate UI update upon deletion.
* [x] **Action Column (Update):** Action button added as a placeholder (per instructions, to be implemented in the next class).

---

## 🛠️ Tech Stack

* **Backend:**
  * Java 17
  * Spring Boot 4.x
  * Spring Data JPA / Hibernate
  * PostgreSQL
* **Frontend:**
  * React 18 (Functional Components & Hooks)
  * Vite
  * Axios (HTTP Client)
  * React-Toastify (User feedback & notifications)

---

## 🔌 REST API Endpoints

All backend endpoints are prefixed with `/api/office`:

| HTTP Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/office/all` | Retrieves all registered offices |
| `GET` | `/api/office/search?keyword={query}` | Searches offices matching name or number |
| `POST` | `/api/office/save` | Creates and saves a new office |
| `DELETE` | `/api/office/delete/{id}` | Deletes an office by UUID |

---

## 🚀 Getting Started

### 1. Prerequisites
* **Java 17** or higher
* **Node.js** (v18+) & **npm**
* **PostgreSQL** running on port `5432` with database `clinic`

### 2. Backend Setup (Spring Boot)
Navigate to the `backend` folder and run the Spring Boot application:

```bash
cd backend
./mvnw spring-boot:run
```
> The backend server will start on **`http://localhost:8082`**.

### 3. Frontend Setup (React)
Open a new terminal, navigate to the `frontend` folder, install dependencies, and start the development server:

```bash
cd frontend
npm install
npm run dev
```
> Open your browser and navigate to **`http://localhost:5173`**.

---

## 📝 Notes
* As specified in the assignment instructions, only **Search** and **Delete** actions are active. The **Update** button is currently disabled and prepared for the upcoming class.
