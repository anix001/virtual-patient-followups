import { useState } from "react";
import { createPatient } from "../services/api";
import NavBar from "../components/NavBar";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    ownerContact: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.ownerContact) {
      setError("Both fields are required!");
      return;
    }
    const res = await createPatient(formData.name, formData.ownerContact);
    if(res) alert(" Patient Created!");
    setError("");
    setFormData({
      name: "",
      ownerContact: "",
    });
  };

  return (
    <>
    <NavBar/>
    
    <div style={{
      maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center" 
    }}>
      <h2 style={styles.title}>Enter Patient Details</h2>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
      }}>
        <label style={{
            fontWeight: "bold",
            textAlign: "left",
        }}>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter name"
        />

        <label style={{
            fontWeight: "bold",
            textAlign: "left",
        }}>Owner Contact:</label>
        <input
          type="text"
          name="ownerContact"
          value={formData.ownerContact}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter owner contact"
        />

        <button type="submit" style={styles.button}>Create Patient</button>
      </form>
    </div>
    </>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center" ,
  },
  title: {
    marginBottom: "15px",
    color: "#2c3e50",
  },
  error: {
    color: "#e74c3c",
    fontSize: "14px",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  label: {
    fontWeight: "bold",
    textAlign: "left",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s",
  },
};

export default PatientForm;
