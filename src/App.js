import "./App.css";
import { Route, Routes, useParams, Link } from "react-router-dom"
import { folderToFileData, itemToLink } from "./assets/pdfData.js"
import playstorePng from "./assets/imgs/playstore.png"
import appstorePng from "./assets/imgs/appstore.png"
import { isMobile } from "react-device-detect";

// run 'npm run deploy' to have build verson

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:title' element={<OtherLists />} />
      <Route path='/joke' element={<AppleStoreJoke />} />
      {/* <Route path='/:title/:link' element={<OpenPdf />} /> */}
    </Routes>
  )
}
function AppleStoreJoke(){
  return (
  <div>
      <h1>
        SIKEEEEEEEEE
      </h1>
        <h2>Unfortunately you have made the Wrong Decision by choosing an iphone.🤢🤮</h2>
      All jokes aside, will be trying to make the ios version soon. 
      Until then, think about the wrong Decision you made by choosing an iphone.
      Vaheguru
    </div>
  )
}
function Home() {
  const { innerWidth: width, innerHeight: height } = window;
  const styles = {
    stores: {
      flex:1,
      // justifyContent: 'space-evenly',
      justifyContent : 'space-between',
    },
  }
  return (
    <div className="App">
      <h1>Home</h1>
      <ListDisplay dataObj={folderToFileData} />
      <div style={styles.stores}>
        <a href="https://play.google.com/store/apps/details?id=com.larrivarpothi" >
          <img src={playstorePng} width={width/7} height={height/7} alt=""/>
        </a>
        <Link to={'/joke'} >
          <img src={appstorePng} width={width/7} height={height/7} alt=""/>
        </Link>
      </div>
      <ul>
        <li>
          <a href="https://sdoji.xyz/">Keertan Player</a>
        </li>
        <li>
          <a href="https://giansingh4710.github.io/paathPlayer/">Gurbani(Paath) Player</a>
        </li>
      </ul>
    </div>
  )
}
function OtherLists() {
  function getObj(obj, ans) {
    if (!obj[ans]) {
      for (const key in obj) {
        const newAns = getObj(obj[key], ans)
        if (!newAns) continue
        return newAns
      }
    }
    return obj[ans]
  }
  const { title } = useParams()
  const link = itemToLink[title]
  if (link !== 'folder')
    return (<OpenPdf link={link} title={title} />)

  let dataObj = getObj(folderToFileData, title)
  if (!dataObj) {
    return (
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
          console.log(item,itemToLink[item])
          return (
            <Link to={`/${item}`} key={item} >
              <BarOption
                left={""}
                text={item}
              />
            </Link>
          )
        })}
      </div>
    </div>
  );
}
export function BarOption({ text }) {
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

function OpenPdf({link,title}) {
  // return <OpenPdfMobile link={link} title={title} />
  if(isMobile) return <OpenPdfMobile link={link} title={title} />
  return <OpenPdfDesktop link={link} title={title} />
}

function OpenPdfDesktop({ link, title }) {
  const { innerWidth: width, innerHeight: height } = window;
  // const { link,title } = useParams()
  // const useableLink=decode(link)
  const useableLink = link
  console.log(useableLink)
  return (
    <div >
      <h1>{title}</h1>
      <embed src={useableLink} width={width} height={height} />
    </div>
  );
}

function OpenPdfMobile({link,title}) {
  const { innerWidth: width, innerHeight: height } = window;
  const pdfLink =
    "https://docs.google.com/viewer?url="+link+"&embedded=true"
  console.log(pdfLink)

  const styles={
    container:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pdf:{
      width:width*0.9,
      height:height*0.9,
    }
  }
  return (
    <div>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.container}>
        <iframe src={pdfLink} style={styles.pdf} frameborder="0"> </iframe>
      </div>
    </div>
  );
}


export default App;
