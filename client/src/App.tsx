// import { useEffect, useState } from "react";
// import axios from "axios";

import AppRouter from "./routes/AppRouter";

function App() {
  
//   const [followUps, setFollowUps] = useState([]);
//   console.log("🚀 ~ App ~ followUps:", followUps);

//     useEffect(() => {
//         axios.get("http://localhost:8000/api/patient-followup").then(res => setFollowUps(res.data));
//     }, []);

    return (
        // <div>
        //     <h1>Follow-Ups</h1>
        //     {followUps.map(patient => (
        //         <div key={patient._id}>
        //             <h3>{patient.name}</h3>
        //             {patient.followUps.map(followUp => (
        //                 <p key={followUp.date}>{followUp.date} - {followUp.status}</p>
        //             ))}
        //         </div>
        //     ))}
        // </div>
        <AppRouter/>
    );
}

export default App
