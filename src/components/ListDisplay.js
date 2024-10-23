import { Link} from "react-router-dom";
import BarOption from "./BarOption.js";

export default function ListDisplay({ dataObj }) {
  const styles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto",
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
  };

  const keysLst = Object.keys(dataObj);
  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {keysLst.map((item) => {
          return (
            <Link to={`/${item}`} key={item} style={{ textDecoration: "none" }}>
              <BarOption text={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

