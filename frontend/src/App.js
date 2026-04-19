import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties"element={ <ProtectedRoute><Properties /></ProtectedRoute>}/>
        <Route path="/add-property" element={<ProtectedRoute><AddProperty /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;