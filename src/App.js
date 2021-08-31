import "./App.css";

import React from "react";

function App() {
  const [folder, setFolder] = React.useState("");

  return (
    <div className="App">
      <h1>Santhiya Pothi</h1>
      <h2>{folder}</h2>

      {folder === "" ? (
        <HomeScreen setFolder={setFolder} />
      ) : (
        <FoldersToPdf folderName={folder} setFolder={setFolder} />
      )}
    </div>
  );
}

function HomeScreen({ setFolder }) {
  return (
    <div>
      <div>
        {ALL_FILES.map((item) => {
          return (
            <div key={item.title}>
              {/* <a href=""> */}
              <button
                onClick={() => {
                  setFolder(item.title);
                }}
              >
                <p>{item.title}</p>
              </button>
              {/* </a> */}
              {/* <div></div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FoldersToPdf({ folderName, setFolder }) {
  let theListWithFiles;
  // ALL_FILES.map((aFolder) => {
  //   if (aFolder.title === folderName) {
  //     theListWithFiles = aFolder.listt;
  //   }
  // });
  theListWithFiles = ALL_FILES.filter(
    (aFolder) => aFolder.title === folderName
  );
  theListWithFiles = theListWithFiles[0].listt;
  // console.log(theListWithFiles);
  return (
    <div>
      <button onClick={() => setFolder("")}>
        <h2>back</h2>
      </button>
      <div>
        {theListWithFiles.map((item) => {
          const hrefLoc =
            "http://kathadata.host/pdfs/" +
            folderName.split(" ").join("") +
            "/" +
            item.title.split(" ").join("");
          return (
            <div key={item.title}>
              <a href={hrefLoc} target="_blank" rel="noreferrer">
                >
                <button>
                  <p>{item.title}</p>
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ALL_FILES = [
  {
    title: "Sri Guru Granth Sahib Jee",
    listt: [{ title: "Adi Maharaj.pdf" }, { title: "Fareedkot Teeka.pdf" }],
  },
  {
    title: "Panj Granthi",
    listt: [
      { title: "GauriBavanAkahri.pdf" },
      { title: "SukhmaniSahib.pdf" },
      { title: "AsaKiVaar.pdf" },
      { title: "DakhniOankaar.pdf" },
      { title: "SidhGosth.pdf" },
    ],
  },
  {
    title: "Bai Varra",
    listt: [
      { title: "1) Sri Raag Ki Vaar Mahala 4.pdf" },
      { title: "2) Vaar Maajh Ki Mahala 1.pdf" },
      { title: "3) Goauri Ki Vaar Mahala 4.pdf" },
      { title: "4) Goauri Ki Vaar Mahala 5.pdf" },
      { title: "5) Asa Vaar Mahala 1.pdf" },
      { title: "6) Goojri Ki Vaar Mahala 3.pdf" },
      { title: "7) Goojri Ki Vaar Mahala 5.pdf" },
      { title: "8) Bihagra Ki Vaar Mahala 4.pdf" },
      { title: "9) Vidhans Ki Vaar Mahala 4.pdf" },
      { title: "10) Sorath Ki Vaar Mahala 4.pdf" },
      { title: "11) Jaitsri Ki Vaar Mahala 5.pdf" },
      { title: "12) Soohi KI Vaar Mahala 3.pdf" },
      { title: "13) Bilval Ki Vaar Mahala 4.pdf" },
      { title: "14) Ramkali Ki Vaar Mahala 3.pdf" },
      { title: "15) Ramkali Ki Vaar Mahala 5.pdf" },
      { title: "16) Ramkali Ki Vaar Rai Satta Balvand.pdf" },
      { title: "17) Maroo Ki Vaar - Mahala 3.pdf" },
      { title: "18) Maroo Ki Vaar - Mahala 5 Dakhne.pdf" },
      { title: "19) Basant Ki Vaar Mahala 5.pdf" },
      { title: "20) Sarang Ki Vaar Mahala 4.pdf" },
      { title: "21) Malaar Ki Vaar Mahala 1.pdf" },
      { title: "22) Kanre Ki Vaar Mahala 4.pdf" },
      //'22 Vaara Tatkara.jpeg',
    ],
  },
  {
    title: "Bhagat Bani",
    listt: [
      { title: "1) Sri raag.pdf" },
      { title: "2) Raag Gaurii.pdf" },
      { title: "3) Raag Asa.pdf" },
      { title: "4) Raag Goojri.pdf" },
      { title: "5) Raag Sorath.pdf" },
      { title: "6) Raag Dhanasri.pdf" },
      { title: "7) Raag Jaatsri.pdf" },
      { title: "8) Raag Todi.pdf" },
      { title: "9) Raag Tilang.pdf" },
      { title: "10) Raag Soohi.pdf" },
      { title: "11) Raag Bilawal.pdf" },
      { title: "12) Raag Goand.pdf" },
      { title: "13) Raag Raamkali.pdf" },
      { title: "14) Raag Mali Goara.pdf" },
      { title: "15) Raag Maroo.pdf" },
      { title: "16) Raag keydara.pdf" },
      { title: "17) Raag Bhaaro.pdf" },
      { title: "18) Raag Basant.pdf" },
      { title: "19) Raag Sarang.pdf" },
      { title: "20) Raag Malaar.pdf" },
      { title: "21) Raag Kaanra.pdf" },
      { title: "22) Raag Parbati.pdf" },
      { title: "23) Salok Bhagat Kabir Jio Ki.pdf" },
      { title: "24) Salok Bhagat Fareed Jee Ki.pdf" },
      //'Bhagat Bani Tatkara.jpeg'
    ],
  },
  {
    title: "Bhattaa De Swaiye",
    listt: [
      { title: "SwaiyeSriMukhvaakeaMahalla5.pdf" },
      { title: "SwaiyeSriMukhvaakeaMahalla5-2.pdf" },
      { title: "SwaiyeMahallayPeheleyKy.pdf" },
      { title: "SwaiyeMahallayDoojeyKy.pdf" },
      { title: "SwaiyeMahallayTejeyKy.pdf" },
      { title: "SwaiyeMahallayChotheyKy.pdf" },
      { title: "SwaiyeMahallayPanjveyKy.pdf" },
    ],
  },
  {
    title: "Vaara De Vadeek",
    listt: [
      { tilte: "VaaraDiVadeekMahalla1.pdf" },
      { tilte: "VaaraDiVadeekMahalla3.pdf" },
      { tilte: "VaaraDiVadeekMahalla4.pdf" },
      { tilte: "VaaraDiVadeekMahalla5.pdf" },
    ],
  },
  {
    title: "Vidya Sagar Pothis",
    listt: [
      { title: "Adhyatam_Prakash.pdf" },
      { title: "Bavras_Amrit.pdf" },
      { title: "CaNaka_Rajniti.pdf" },
      { title: "Sarkutavali.pdf" },
      { title: "Vichar_Mala.pdf" },
      //'Bhagat Bani Tatkara.jpeg'
    ],
  },
  {
    title: "Sri Nanak Parkash",
    listt: [
      { title: "Sri_Nanak_Parkash_1.pdf" },
      { title: "Sri_Nanak_Parkash_2.pdf" },
    ],
  },
  // {
  //   title: "ਪਾਠ Hajari",
  //   listt: Object.entries(state.checkBoxes).filter((bani) => {
  //     return bani[1].currentAng !== 1 && bani[1].checked === false;
  //   }),
  // },
];
// const styles = StyleSheet.create({
//   container: {
//     // justifyContent: 'center',
//     alignItems: "center",
//     backgroundColor: "rgba(114,160,193,1)",
//     height: "100%",
//   },
//   scroll: {
//     paddingTop: "0%",
//     width: "100%",
//     // height: '90%',
//     // backgroundColor: 'yellow',
//   },
//   shabadButton: {
//     top: 10,
//     width: 200,
//     height: 50,
//     borderRadius: 40,
//     backgroundColor: "#5072A7",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   shabadtext: {
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default App;
