import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2 onClick={() => navigate("/properties")} style={{ cursor: "pointer" }}>
        Jagga Real Estate
      </h2>

      <div className="nav-links">
        <button onClick={() => navigate("/properties")}>Properties</button>

        {token && (
          <>
            <button onClick={() => navigate("/add-property")}>Add</button>
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
            <button onClick={logout}>Logout</button>
          </>
        )}

        {!token && (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </>
        )}
      </div>
      
    </div>
  );
}

export default Navbar;