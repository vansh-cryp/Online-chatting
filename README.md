# Online-chatting

A full-stack online chat application built with React (frontend) and Express/MongoDB (backend).

## Project Structure

## Backend Workflow

- **Express server** ([backend/src/index.js](backend/src/index.js)) handles API requests.
- **Authentication** ([backend/src/controllers/auth.controller.js](backend/src/controllers/auth.controller.js)) with JWT, signup/login/logout, and profile updates.
- **Message handling** ([backend/src/controllers/message.controller.js](backend/src/controllers/message.controller.js)): send and retrieve messages.
- **MongoDB models** ([backend/src/models/user.model.js](backend/src/models/user.model.js), [backend/src/models/message.model.js](backend/src/models/message.model.js)).
- **Protected routes** ([backend/src/middleware/protectRoute.middleware.js](backend/src/middleware/protectRoute.middleware.js)) ensure only authenticated users access certain endpoints.
- **Cloudinary integration** ([backend/src/lib/cloudinary.js](backend/src/lib/cloudinary.js)) for profile and message images.

### Running Backend

1. Set up `.env` with your MongoDB, JWT, and Cloudinary credentials.
2. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Run the server:
   ```sh
   npm run dev
   ```
   Backend runs on `http://localhost:5000` by default.

## Frontend Workflow

- **React app** ([frontend/src/App.js](frontend/src/App.js)): main application component.
- **Routing** ([frontend/src/App.js](frontend/src/App.js)): handled by React Router.
- **State management** ([frontend/src/context/GlobalState.js](frontend/src/context/GlobalState.js)): global state with Context API.
- **Protected routes** ([frontend/src/utils/protectedRoute.js](frontend/src/utils/protectedRoute.js)) for authenticated user access.
- **API calls** ([frontend/src/utils/api.js](frontend/src/utils/api.js)): centralized API requests.

### Running Frontend

1. Set up `.env` with your frontend-specific variables (e.g., API URL).
2. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
3. Run the app:
   ```sh
   npm start
   ```
   Frontend runs on `http://localhost:3000` by default.


