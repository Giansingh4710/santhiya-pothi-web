//pdf-js
import "./App.css";

import { useState } from "react";

import { IoArrowBack } from "react-icons/io5";

// run 'npm run deploy' to have build verson
const barStyle = {
  itemContainer: {
    // height: 70,
    width: "100%",
    backgroundColor: "#7CE8",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  titleText: {
    flex: 1,
    fontSize: 20,
  },
  button: {
    width: "100%",
  },
  gap: {
    height: 1,
    backgroundColor: "#00308F",
  },
};

function App() {
  const [folder, setFolder] = useState("Home");
  const [pdfTitle, setPdfTitle] = useState("");

  function screenContent() {
    if (pdfTitle !== "")
      return (
        <>
          <div>
            <h2>{pdfTitle}</h2>
            <button onClick={() => setPdfTitle("")}>
              <IoArrowBack />
            </button>
          </div>
          <OpenPdf
            pdfTitle={pdfTitle}
            setPdfTitle={setPdfTitle}
            folder={folder}
          />
        </>
      );
    if (folder === "Home") {
      return (
        <>
          <h2>{folder}</h2>
          <HomeScreen setFolder={setFolder} />
        </>
      );
    }
    return (
      <>
        <div style={{ flexDirection: "column" }}>
          <h2 style={{ flex: 1 }}>{folder}</h2>
          <button style={{ flex: 1 }} onClick={() => setFolder("Home")}>
            <IoArrowBack />
          </button>
        </div>
        <FoldersToPdf
          folderName={folder}
          setFolder={setFolder}
          setPdfTitle={setPdfTitle}
          // setHref={setHref}
        />
      </>
    );
  }
  return (
    <div className="App">
      {/* <h2>{folder}</h2> */}
      {screenContent()}
    </div>
  );
}

function HomeScreen({ setFolder }) {
  return (
    <div>
      <div>
        {ALL_FILES.map((item) => {
          return (
            <div style={barStyle.itemContainer} key={item.title}>
              <button
                style={barStyle.button}
                onClick={() => {
                  setFolder(item.title);
                }}
              >
                <p>{item.title}</p>
              </button>
              <div style={barStyle.gap}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FoldersToPdf({ folderName, setFolder, setPdfTitle }) {
  console.log(folderName);
  let theListWithFiles = ALL_FILES.filter(
    (aFolder) => aFolder.title === folderName
  );
  theListWithFiles = theListWithFiles[0].listt;
  return (
    <>
      {theListWithFiles.map((item) => {
        return (
          <div style={barStyle.itemContainer} key={item.title}>
            <button
              style={barStyle.button}
              onClick={() => {
                setPdfTitle(item.title);
              }}
            >
              <p>{item.title}</p>
            </button>
            <div style={barStyle.gap}></div>
          </div>
        );
      })}
    </>
  );
}

function OpenPdf({ pdfTitle, folder }) {
  const pdfLink =
    "lib/web/viewer.html?file=../../pdfs/" +
    folder.split(" ").join("") +
    "/" +
    pdfTitle.split(" ").join("");
  return (
    <div className="webviewer">
      <iframe
        id="pdf-js-viewer"
        // src="lib/web/viewer.html?file=../../pdfs/PanjGranthi/SukhmaniSahib.pdf"
        src={pdfLink}
        // src="lib/web/viewer.html?file=../../sample.pdf"
        title="webviewer"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
// function OpenPdf (pdftron)({ pdfTitle, folder }) {
//   const viewer = useRef(null);

//   useEffect(() => {
//     const pdfLink =
//       "pdfs/" + folder.split(" ").join("") + "/" + pdfTitle.split(" ").join("");

//     WebViewer(
//       {
//         path: "/webviewer",
//         initialDoc: pdfLink,
//       },
//       viewer.current
//     ).then((instance) => {});
//   }, []);

//   return <div className="webviewer" ref={viewer}></div>;
// }

// function OpenPdf (react-pdf)({ pdfTitle, folder }) {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
//   const [inputAng, setInputAng] = useState("");
//   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//     setPageNumber(1);
//   }

//   function changePage(offset) {
//     setPageNumber((prevPageNumber) => prevPageNumber + offset);
//   }

//   function previousPage() {
//     changePage(-1);
//   }

//   function nextPage() {
//     changePage(1);
//   }

//   const pdfLink =
//     "pdfs/" + folder.split(" ").join("") + "/" + pdfTitle.split(" ").join("");

//   return (
//     <>
//       <Document
//         file={pdfLink}
//         options={{ workerSrc: "/pdf.worker.js" }}
//         onLoadSuccess={onDocumentLoadSuccess}
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <div>
//         <p>
//           Ang {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
//         </p>
//         <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
//           Previous
//         </button>
//         <button
//           type="button"
//           disabled={pageNumber >= numPages}
//           onClick={nextPage}
//         >
//           Next
//         </button>
//       </div>
//       <div
//       // style={styles.inputRow}
//       >
//         <input
//           placeholder="Enter Ang Num"
//           value={inputAng}
//           onChange={(event) => {
//             setInputAng(event.currentTarget.value);
//           }}
//         />
//         <button
//           // style={styles.inputSubmit}
//           onClick={() => {
//             const asInt = parseInt(inputAng);
//             if (asInt) {
//               if (asInt <= numPages && asInt > 0) {
//                 setPageNumber(asInt);
//                 // setInputAng(String(numPages));
//               }
//             }
//             alert("Please enter Valid Ang Number");
//           }}
//         >
//           <p>Submit</p>
//         </button>
//       </div>
//     </>
//   );
// }

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
      { title: "VaaraDiVadeekMahalla1.pdf" },
      { title: "VaaraDiVadeekMahalla3.pdf" },
      { title: "VaaraDiVadeekMahalla4.pdf" },
      { title: "VaaraDiVadeekMahalla5.pdf" },
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
export default App;
