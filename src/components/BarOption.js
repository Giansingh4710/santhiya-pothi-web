import { isMobile } from "react-device-detect";

export default function BarOption({ text }) {
  const styles = {
    itemContainer: {
      padding: "15px",
      borderRadius: "8px",
      backgroundColor: "#04293A",
      transition: "background-color 0.3s ease",
      cursor: "pointer",
    },
    titleText: {
      fontSize: isMobile ? "14px" : "16px",
      color: "white",
      margin: 0,
      textAlign: "center",
    },
  };
  return (
    <div style={styles.itemContainer}>
      <p style={styles.titleText}>{text}</p>
    </div>
  );
}

