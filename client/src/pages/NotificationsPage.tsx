import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { getNotifications } from "../services/api";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    getNotifications().then((data) => {
      // Extract and flatten all notifications
      const allNotifications = data.flatMap((item: { notifications: string[] }) => item.notifications);
      setNotifications(allNotifications);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="p-5">
        <h2>Urgent Notifications</h2>
        {notifications.length === 0 ? (
          <p>No urgent cases.</p>
        ) : (
          <ul>
            {notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NotificationsPage;
