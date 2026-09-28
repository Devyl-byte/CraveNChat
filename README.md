# CraveNChat

CraveNChat is a full-stack canteen ordering and campus chat application. It combines a Spring Boot backend with a React/Vite frontend so students can view menu items, place orders, chat in real time, and use a simple AI assistant.

## Features

- Student-facing menu and order placement
- Admin kitchen order dashboard
- Real-time campus chat and live order updates with WebSocket/STOMP
- AI assistant endpoint for menu/order help
- PostgreSQL-backed persistence with Spring Data JPA
- React frontend built with Vite, Tailwind CSS, React Router, Axios, and Lucide icons

## Project Structure

```text
CraveNChat/
├── backend/                 # Spring Boot REST API
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── pom.xml
│   └── mvnw / mvnw.cmd
├── frontend/                # React + Vite client
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Prerequisites

Install these before running the project:

- Java 21
- Node.js 20 or newer
- npm
- PostgreSQL

## Backend Setup

1. Create a PostgreSQL database:

```sql
CREATE DATABASE "craveChatDB";
```

2. Create the backend config file:

```powershell
cd "backend"
copy "src\main\resources\application.properties.example" "src\main\resources\application.properties"
```

3. Update `src/main/resources/application.properties` with your PostgreSQL username and password:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/craveChatDB
spring.datasource.username=your_postgres_username
spring.datasource.password=your_postgres_password
```

4. Run the backend:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend runs at:

```text
http://localhost:8080
```

## Frontend Setup

Open a second terminal from the project root.

1. Install dependencies:

```powershell
cd "frontend"
npm install
```

2. Create the frontend environment file:

```powershell
copy ".env.example" ".env"
```

3. Confirm the API URL in `.env`:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

4. Run the frontend:

```powershell
npm run dev
```

The frontend usually runs at:

```text
http://localhost:5173
```

## Useful Commands

Backend:

```powershell
cd "backend"
.\mvnw.cmd test
.\mvnw.cmd spring-boot:run
```

Frontend:

```powershell
cd "frontend"
npm run dev
npm run build
npm run lint
```

## API Overview

- `GET /api/menu` - list all menu items
- `GET /api/menu/available` - list available menu items
- `POST /api/orders/place` - place an order
- `GET /api/orders` - list orders
- `GET /api/ai/ask?query=...` - ask the assistant
- `WS /ws-canteen` - WebSocket endpoint for chat and live updates

## GitHub Notes

Do not commit local config files or generated folders:

- `frontend/.env`
- `backend/src/main/resources/application.properties`
- `node_modules/`
- `dist/`
- `target/`

The repository includes `.env.example` and `application.properties.example` so other developers can create their own local config after cloning.
