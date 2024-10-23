import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { get_all_pdfs } from "./assets/helper.js";
import Home from "./components/Home.js";
import OtherLists from "./components/OtherLists.js";
import Navbar from "./components/Navbar";

// run 'npm run deploy' to have build version
function App() {
  const [folderToFileData, setFolderToFileData] = useState(null);
  const [allPdfs, setAllPdfs] = useState({});

  useEffect(() => {
    fetch("/api/pdf_display_data.json")
      .then((res) => res.json())
      .then((data) => {
        setFolderToFileData(data);
        setAllPdfs(get_all_pdfs(data));
      });
  }, []);

  if (!folderToFileData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home folderToFileData={folderToFileData} />}
        />
        <Route
          path="/:title"
          element={
            <OtherLists folderToFileData={folderToFileData} allPdfs={allPdfs} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
