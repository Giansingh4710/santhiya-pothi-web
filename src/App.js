import "./App.css";

import { useState } from "react";
import { Route, Routes, useParams, Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5";
import { folderToFileData } from "./assets/pdfData.js"

// run 'npm run deploy' to have build verson
function decode(link) {
  // console.log(link)
  const map = { '-': ':', '_': '/' }
  let ans = ""
  for (const char of link) {
    if (map[char]) ans += map[char]
    else ans += char
  }
  return ans
}
function encode(link) {
  // console.log(link)
  const map = { ':': '-', '/': '_' }
  let ans = ""
  for (const char of link) {
    if (map[char]) ans += map[char]
    else ans += char
  }
  return ans
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/showPdf/:link' element={<OpenPdf />} />
    </Routes>
  )
}
function Home() {
  const [currentDataObj, setCurrentDataObj] = useState(folderToFileData)
  // const {title}=useParams()
  // console.log(title=="")

  return (
    <div className="App">
      <ListDisplay dataObj={currentDataObj} setDataObj={setCurrentDataObj} />
    </div>
  )
}
function ListDisplay({ dataObj, setDataObj }) {
  // const fullPath = params.fullPath;

  const styles = {
    container: {
      alignItems: 'center',
    },
    scroll: {
      width: '100%',
      // height: '80%',
    },
  };
  const keysLst = Object.keys(dataObj)
  return (
    <div style={styles.container}>
      <div style={styles.scroll}>
        {keysLst.map((item) => {
          const isFolder = !dataObj[item].currentAng; //currentAng will never be 0
          if (!isFolder) {
            const newLink = encode(dataObj[item].uri)
            return <Link to={`/showPdf/${newLink}`}>
              <BarOption
                key={item}
                left={""}
                text={item}
                onClick={() => {console.log(item)}}
              />
            </Link>
          }
          return <BarOption
            key={item}
            left={""}
            text={item}
            onClick={() => {
              if (isFolder) {
                setDataObj(dataObj[item])
              } else {
              }
            }}
          />
        })}
      </div>
    </div>
  );
}
export function BarOption({ text, onClick }) {
  const styles = {
    itemContainer: {
      padding: 5,
      borderRadius: 5,
      backgroundColor: '#04293A',
      margin: 3,
    },
    titleText: {
      alignItems: 'center',
      fontSize: 15,
      padding: 5,
      left: 12,
      color: 'white',
    },
  };
  return (
    <div
      style={styles.itemContainer}
      onClick={() => onClick()}
    >
      <p style={styles.titleText}>{text}</p>
    </div>
  );
}

function OpenPdf({ }) {
  const { innerWidth: width, innerHeight: height } = window;
  const { link } = useParams()
  decode(link)
  return (
    <div >
      <embed src={decode(link)} width={width} height={height} />
    </div>
  );
}

export default App;
