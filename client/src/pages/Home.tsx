import { useEffect, useState } from "react";

import { getFollowUps } from "../services/api";
import FollowupCard from "../components/FollowupCard";
import NavBar from "../components/NavBar";

const Home = () => {

    const [followUps, setFollowUps] = useState([]);

    useEffect(() => {
        getFollowUps().then(data => setFollowUps(data))
    }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <NavBar/>
       <div style={{marginTop:'30px', display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
            {
              followUps.map((patient, key) => <FollowupCard key={key} patient={patient}/>)
            }
       </div>
    </div>
  );
};

export default Home;
