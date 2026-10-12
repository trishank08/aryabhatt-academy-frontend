# Aryabhatt Academy 🎓

A full-stack academy website designed to simplify student registration and provide an accessible online platform for the academy.

## 🌐 Live Demo

- **Live Website:** [Visit Aryabhatt Academy](https://aryabhatt-academy-frontend.vercel.app/)
- **Backend API:** [View Backend on Render](https://aryabhatt-academy-api.onrender.com)
  

## ✨ Features

- **Student Registration:** Online registration form for students.
- **Database Integration:** Stores student registration details in MongoDB Atlas.
- **Email Notifications:** Sends registration notifications to students and the administrator.
- **REST API Integration:** Connects the frontend with the backend.
- **Responsive Interface:** User-friendly website across different screen sizes.
- **Cloud Deployment:** Frontend deployed on Vercel and backend hosted on Render.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- REST APIs

### Database and Deployment
- MongoDB Atlas
- Email notification service
- Vercel
- Render

## 🏗️ Project Structure

```text
Aryabhatt-Academy/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── models/
│   ├── package.json
│   └── server.js
└── README.md
```

*Note: Adjust the directory names and files to match your actual project structure.*

## ⚙️ Installation and Setup

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Aryabhatt-Academy
```

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and add the environment variables required by your application.

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
```

Add any required email service credentials and other configuration variables used by your backend.

### 3. Start the Backend

```bash
npm start
```

Make sure your `package.json` contains the appropriate start script.

### 4. Configure and Start the Frontend

Open a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in your terminal.

## 🚀 Deployment

The project is deployed using cloud hosting services.

| Component | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

### Production Configuration

- Configure the frontend to use the deployed backend API URL.
- Set environment variables in the Vercel and Render dashboards.
- Configure CORS to allow requests from the deployed frontend domain.
- Verify that database connectivity and email notifications work in production.

## 🔐 Security

- Keep database credentials and email service secrets in environment variables.
- Never commit `.env` files or private credentials to GitHub.
- Configure CORS to allow only trusted origins.
- Avoid exposing sensitive information in API responses.

## 🎯 Project Objective

The goal of Aryabhatt Academy is to simplify student registration through a web-based platform while demonstrating practical full-stack development, REST API integration, database management, email notifications, and cloud deployment.

## 👨‍💻 Author

**Trishank Rahangdale**

- **GitHub:** [Visit GitHub Profile](YOUR_GITHUB_PROFILE_URL)
- **LinkedIn:** [Visit LinkedIn Profile](YOUR_LINKEDIN_PROFILE_URL)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub.
