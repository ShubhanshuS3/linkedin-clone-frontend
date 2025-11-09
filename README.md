# LinkedIn Clone - Frontend

This is the **frontend** of the LinkedIn Clone web application.  
It is built using **React (Vite)** and interacts with the backend REST API for user authentication and post management.

---

## 🚀 Live Demo
🔗 **Frontend (Deployed on Netlify/Vercel):** [https://linkedin-clone-yourname.netlify.app](https://linkedin-clone-yourname.netlify.app)

🔗 **Backend API:** [https://linkedin-clone-backend.onrender.com](https://linkedin-clone-backend.onrender.com)

---

## 🧩 Features
- User login and signup pages  
- Create and view posts (feed)  
- Responsive UI built with React  
- Fetches data from live Node.js + MongoDB backend  
- Protected routes using JWT authentication  

---

## 🧠 Tech Stack
- **React (Vite)**
- **Axios** – for API communication
- **React Router DOM** – for navigation
- **CSS / Tailwind** – (if you used it, else remove)
- **Environment Variables** via Vite

---

## ⚙️ Environment Variables
Create a `.env` file in the root of your frontend folder:

```env
VITE_API_URL=https://linkedin-clone-backend.onrender.com

🏗️ Installation & Setup
# 1. Clone the repository
git clone https://github.com/<your-username>/linkedin-clone-frontend.git

# 2. Move into the folder
cd linkedin-clone-frontend

# 3. Install dependencies
npm install

# 4. Run locally
npm run dev
📁 Folder Structure
src/
 ├── components/    # Reusable UI components
 ├── pages/         # Login, Signup, Feed pages
 ├── services/      # API configuration (Axios)
 ├── contexts/      # Auth Context (if used)
 ├── App.jsx        # Main App component
 └── main.jsx       # Entry file


