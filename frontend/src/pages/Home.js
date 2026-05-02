import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/home.css";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api.get("/properties").then(res => setProperties(res.data));
  }, []);

  const handleDelete = async (id) => {
  try {
    await api.delete(`/properties/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setProperties(properties.filter((p) => p._id !== id));
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>

      <div className="home-container">
        <h1>Available Properties</h1>

        <div className="property-grid">
          {properties.map((p) => (
            <div className="property-card" key={p._id}>
              
              {/* Image */}
              {p.image && (
                <img src={p.image} alt={p.title} />
              )}

              <div className="property-info">
                <h3>{p.title}</h3>
                <p className="location">{p.location}</p>
                <p className="price">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;