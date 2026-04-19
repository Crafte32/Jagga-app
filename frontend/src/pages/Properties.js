import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Properties() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/properties").then(res => setProperties(res.data));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Properties</h2>

        <div>
          <Link to="/add-property">
            <button>Add Property</button>
          </Link>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        {properties.map((p) => (
  <div key={p._id} style={{
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px"
  }}>
    
    {p.image && (
      <img
        src={p.image}
        alt={p.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />
    )}

    <h3>{p.title}</h3>
    <p>Price: Rs. {p.price}</p>
    <p>Location: {p.location}</p>
    <p>{p.description}</p>

  </div>
))}
      </div>
    </div>
  );
}

export default Properties;