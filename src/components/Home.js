import { isMobile } from "react-device-detect";
import playstorePng from "../assets/imgs/playstore.png";
import appstorePng from "../assets/imgs/appstore.png";
import ListDisplay from "./ListDisplay";

export default function Home({ folderToFileData }) {
  const { innerWidth: width, innerHeight: height } = window;
  const theWidth = isMobile ? width * 0.4 : 200 + height - height;
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      boxSizing: "border-box",
    },
    header: {
      textAlign: "center",
      marginBottom: "30px",
    },
    title: {
      fontSize: isMobile ? "24px" : "32px",
      color: "#04293A",
    },
    stores: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "30px",
      flexWrap: "wrap",
    },
    store: {
      margin: "10px",
    },
    footer: {
      marginTop: "30px",
      textAlign: "center",
      fontSize: isMobile ? "14px" : "16px",
    },
  };
  return (
    <div className="App" style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to Santhiya Pothi</h1>
      </header>
      <ListDisplay dataObj={folderToFileData} />
      <div style={styles.stores}>
        <a
          style={styles.store}
          href="https://play.google.com/store/apps/details?id=com.larrivarpothi"
        >
          <img
            src={playstorePng}
            width={theWidth}
            height="auto"
            alt="Google Play Store"
          />
        </a>
        <a style={styles.store} href="https://apps.apple.com/app/id1669154032">
          <img
            src={appstorePng}
            width={theWidth}
            height="auto"
            alt="Apple App Store"
          />
        </a>
      </div>
    </div>
  );
}
