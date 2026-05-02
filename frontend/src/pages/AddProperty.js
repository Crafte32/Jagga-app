import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function AddProperty() {
const [form, setForm] = useState({
  title: "",
  price: "",
  location: "",
  description: "",
  image: null
});

  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("price", form.price);
  formData.append("location", form.location);
  formData.append("description", form.description);
  formData.append("image", form.image);

  try {
    await api.post("/properties", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    navigate("/properties");
  } catch (err) {
    alert("Error adding property");
  }
};

 return (
  <div className="container">
    <div className="form-container">
      <div className="form-box">
        <h2>Add New Property</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Property Title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <input
            type="number"
            placeholder="Price ($)"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input
            placeholder="Location"
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />

          <textarea
            placeholder="Description"
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <input
            type="file"
            className="file-input"
            onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
          />

          <button type="submit">Add Property</button>
        </form>
      </div>
    </div>
  </div>
);
}

export default AddProperty;