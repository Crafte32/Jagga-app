import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* 👇 Navbar condition goes HERE */}
      {location.pathname !== "/login" &&
       location.pathname !== "/register" && <Navbar />}

      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/properties" element={
          <ProtectedRoute>
            <Properties />
          </ProtectedRoute>
        } />

        <Route path="/add-property" element={
          <ProtectedRoute>
            <AddProperty />
          </ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute>
           <Dashboard />
          </ProtectedRoute>
  }
/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />  {/* 👈 Important wrapper */}
    </BrowserRouter>
  );
}

export default App;