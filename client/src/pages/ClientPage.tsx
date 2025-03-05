import { useState } from "react";
import { getPatientDetails, respondToFollowUp } from "../services/api";
import NavBar from "../components/NavBar";

const ClientPage = () => {
  const [patientId, setPatientId] = useState("");
  const [followUpData, setFollowUpData] = useState({
    followUpDate: "",
    status: "",
  });
  const [followUpOptions, setFollowUpOptions] = useState([]);

  const [error, setError] = useState("");

  const handlePatientIdSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId) {
      setError("Patient ID is required!");
      return;
    }
    const patient = await getPatientDetails(patientId);
    if(patient) setFollowUpOptions(patient.followUps)
    setError("");
  };

  const handleFollowUpSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!followUpData.followUpDate || !followUpData.status) {
      setError("Both Follow-Up Time and Status are required!");
      return;
    }
    const respondData =  await respondToFollowUp(patientId, followUpData.followUpDate, followUpData.status);
    if(respondData) alert("Respond Sent!!");
    setError("");
    setFollowUpOptions([]);
    setPatientId("");
    setFollowUpData({
      followUpDate: "",
      status: "",
    })
  };;

  const handleFollowUpChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFollowUpData({ ...followUpData, [e.target.name]: e.target.value });
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
      textAlign: "center",
    }}>
      <h2 style={styles.title}>Patient Respond Form</h2>

      {error && <p style={styles.error}>{error}</p>}

      {/* Patient ID Form */}
      {followUpOptions.length === 0 &&
      <form onSubmit={handlePatientIdSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
        <label style={{
    fontWeight: "bold",
    textAlign: "left",
  }}>Patient ID:</label>
        <input
          type="text"
          name="patientId"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          style={styles.input}
          placeholder="Enter Patient ID"
        />
        <button type="submit" style={styles.button}>
          Submit Patient ID
        </button>
      </form>}

      {/* Follow-Up Form */}
      {followUpOptions.length>0 &&
      <form onSubmit={handleFollowUpSubmit} style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}>
        <label style={{
    fontWeight: "bold",
    textAlign: "left",
  }}>Follow-Up Date:</label>
        <select
          name="followUpDate"
          value={followUpData.followUpDate}
          onChange={handleFollowUpChange}
          style={styles.input}
        >   <option value="">Select Time</option>
            {
                  followUpOptions.map((item:{date:string}, key:number)=><option key={key} value={item.date}>{item.date}</option>)
            }
        </select>

        <label style={{
    fontWeight: "bold",
    textAlign: "left",
  }}>Status:</label>
        <select
          name="status"
          value={followUpData.status}
          onChange={handleFollowUpChange}
          style={styles.input}
        >
          <option value="">Select Status</option>
          <option value="Healthy">Healthy</option>
          <option value="Concern">Concern</option>
        </select>

        <button type="submit" style={styles.button}>
          Submit Follow-Up
        </button>
      </form>}
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
    textAlign: "center",
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

export default ClientPage;
