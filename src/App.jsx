import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <nav style={{ padding: 10 }}>
          <Link to="/login" style={{ marginRight: 8 }}>
            Login
          </Link>
          <Link to="/signup" style={{ marginRight: 8 }}>
            Signup
          </Link>
          <Link to="/feed">Feed</Link>
        </nav>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
