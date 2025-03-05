import { useEffect, useState } from "react";

import { getFollowUps } from "../services/api";
import FollowupCard from "../components/FollowupCard";
import NavBar from "../components/NavBar";

type FollowUpsType = {
  date: string;
  status: string;
};

type patient = {
  _id: string;
  name: string;
  followUps: FollowUpsType[];
};


const Home = () => {

    const [followUps, setFollowUps] = useState([]);
     

    useEffect(() => {
     
     getFollowUps().then(data => setFollowUps(data));
    }, []);


  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <NavBar/>
       <div style={{marginTop:'30px', display:'flex', gap:'10px', flexWrap:'wrap'}}>
            {
              followUps.map((patient:patient) => <FollowupCard key={patient._id} patient={patient}/>)
            }
       </div>
    </div>
  );
};

export default Home;
