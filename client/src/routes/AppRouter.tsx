import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PatientForm from "../pages/PatientForm";
import ClientPage from "../pages/ClientPage";
import NotificationsPage from "../pages/NotificationsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/respond" element={<ClientPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
