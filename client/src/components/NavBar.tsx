import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#2c3e50",
        color: "white",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            transition: "background 0.3s",
          }}
        >
          Clinic Dashboard
        </Link>
      </h1>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/Patient"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "5px",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {(e.target as HTMLElement).style.background = "#3498db";}}            
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "transparent")}
          >
            Create Patient
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/notifications"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "5px",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {(e.target as HTMLElement).style.background = "#3498db";}}            
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "transparent")}
          >
            Urgent Notifications
          </Link>
        </li>
        <li style={{ margin: "0 15px" }}>
          <Link
            to="/respond"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "5px",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {(e.target as HTMLElement).style.background = "#3498db";}}            
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "transparent")}
          >
            Client
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
