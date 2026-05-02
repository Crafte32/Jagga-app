import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

function Dashboard() {
  const [properties, setProperties] = useState([]);

  const fetchMyProperties = async () => {
    const res = await api.get("/properties");
    setProperties(res.data);
  };

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/properties/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setProperties(properties.filter((p) => p._id !== id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <h1>My Listings</h1>

        <div className="dashboard-grid">
          {properties.map((p) => (
            <div className="dashboard-card" key={p._id}>
              {p.image && <img src={p.image} alt={p.title} />}

              <div className="dashboard-info">
                <h3>{p.title}</h3>
                <p>{p.location}</p>
                <p>${p.price}</p>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;