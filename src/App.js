import "./App.css";
import { Route, Routes, useParams, Link } from "react-router-dom"
import { folderToFileData } from "./assets/pdfData.js"

// run 'npm run deploy' to have build verson

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:title' element={<OtherLists />} />
      <Route path='/:title/:link' element={<OpenPdf />} />
    </Routes>
  )
}
function Home() {
  return (
    <div className="App">
      <h1>Home</h1>
      <ListDisplay dataObj={folderToFileData} />
    </div>
  )
}
function OtherLists() {
  function getObj(obj, ans) {
    if(!obj[ans]){
      for(const key in obj){
        const newAns=getObj(obj[key],ans)
        if(!newAns) continue
        return newAns
      }
    }
    return obj[ans]
  }
  const { title } = useParams()

  // let dataObj = title==="Home"?folderToFileData:getObj(folderToFileData,title)
  let dataObj=getObj(folderToFileData,title)
  console.log("OUT FUCNC",dataObj)
  if(!dataObj){
    return(
    <div className="App">
        <h1>Wrong link Entered</h1>
        <h3>'{title}' not valid</h3>
        <Link to={"/"} >
            <BarOption
              left={""}
              text={"Go Back"}
            />
          </Link>

    </div>

    )
  }
  return (
    <div className="App">
      <h1>{title}</h1>
      <ListDisplay dataObj={dataObj} />
    </div>
  )
}

function ListDisplay({ dataObj }) {
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
            return <Link to={`/${item}/${newLink}`}
              key={item}
            >
              <BarOption
                key={item}
                left={""}
                text={item}
              />
            </Link>
          }
          return <Link to={`/${item}`}
            key={item}
          >
            <BarOption
              left={""}
              text={item}
            />
          </Link>
        })}
      </div>
    </div>
  );
}
export function BarOption({ text}) {
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
    >
      <p style={styles.titleText}>{text}</p>
    </div>
  );
}

function OpenPdf({ }) {
  const { innerWidth: width, innerHeight: height } = window;
  const { link,title } = useParams()
  const useableLink=decode(link)
  console.log(useableLink)
  return (
    <div >
      <h1>{title}</h1>
      <embed src={useableLink} width={width} height={height} />
    </div>
  );
}

function decode(link) {
  const map = { '^': ':', '!': '/' }
  let ans = ""
  for (const char of link) {
    if (map[char]) ans += map[char]
    else ans += char
  }
  return ans
}
function encode(link) {
  const map = { ':': '^', '/': '!' }
  let ans = ""
  for (const char of link) {
    if (map[char]) ans += map[char]
    else ans += char
  }
  return ans
}

export default App;
