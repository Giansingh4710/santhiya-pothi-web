import { Link, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";

export default function Navbar() {
  const location = useLocation();
  const heading = location.pathname.split("/")[1].replaceAll("%20", " ");

  const styles = {
    navbar: {
      backgroundColor: "#04293A",
      padding: "5px 10px",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    navContent: {
      display: "flex",
      justifyContent: "space-between",
      // maxWidth: "1200px",
      // margin: "0 auto",
    },
    logo: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: isMobile ? "14px" : "16px",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContent}>
        <Link to="/" style={styles.logo}>
          <img src="./logo192.jpg" alt="logo" style={styles.logo} />
        </Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>
            {heading}
          </Link>
        </div>
      </div>
    </nav>
  );
}
