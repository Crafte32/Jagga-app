import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api.get("/properties").then(res => setProperties(res.data));
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      {properties.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.location}</p>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;