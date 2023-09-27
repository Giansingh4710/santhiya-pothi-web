import React from 'react'
import './App.css'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { folderToFileData, itemToLink } from './assets/pdfData.js'
import playstorePng from './assets/imgs/playstore.png'
import appstorePng from './assets/imgs/appstore.png'
import { isMobile } from 'react-device-detect'

// run 'npm run deploy' to have build version

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
function Home() {
  const { innerWidth: width, innerHeight: height } = window
  const theWidth = isMobile ? width / 2 : 1500 / 5
  const styles = {
    stores: {
      flex: 1,
    },
    store: {
      margin: '15%',
    },
  }
  return (
    <div className='App'>
      <h1>Home</h1>
      <ListDisplay dataObj={folderToFileData} />
      <div style={styles.stores}>
        <a
          style={styles.store}
          href='https://play.google.com/store/apps/details?id=com.larrivarpothi'
        >
          <img src={playstorePng} width={theWidth} height={height / 7} alt='' />
        </a>
        <a style={styles.store} href='https://apps.apple.com/app/id1669154032'>
          <img src={appstorePng} width={theWidth} height={height / 7} alt='' />
        </a>
      </div>
      <ul>
        <li>
          <a href='https://keerat.xyz'>Sikh Audio Player</a>
        </li>
      </ul>
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
  }
  const keysLst = Object.keys(dataObj)
  return (
    <div style={styles.container}>
      <div style={styles.scroll}>
        {keysLst.map((item) => {
          return (
            <Link to={`/${item}`} key={item}>
              <BarOption left={''} text={item} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

function OtherLists() {
  function getObj(obj, and) {
    if (obj[and]) return obj[and]

    for (const key in obj) {
      if (typeof obj[key] !== 'object') continue

      const newAns = getObj(obj[key], and)
      if (!newAns) continue
      return newAns
    }
    return false
  }

  const { title } = useParams()
  const link = itemToLink[title]
  if (!link) {
    return (
      <div className='App'>
        <h1>Wrong link Entered</h1>
        <h3>'{title}' not valid</h3>
        <Link to={'/'}>
          <BarOption left={''} text={'Go Back'} />
        </Link>
      </div>
    )
  }

  if (link !== 'folder') {
    return <OpenPdf link={link} title={title} />
  }

  let dataObj = getObj(folderToFileData, title)
  return (
    <div className='App'>
      <h1>{title}</h1>
      <ListDisplay dataObj={dataObj} />
    </div>
  )
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
  }
  return (
    <div style={styles.itemContainer}>
      <p style={styles.titleText}>{text}</p>
    </div>
  )
}

function OpenPdf({ link, title }) {
  function getAudioUrl(url) {
    const avaliableAudios = ['BaiVarra', 'BhagatBani', 'PanjGranthi']
    const splits = url.split('/') // ["https:", "", "santhiyapothi.xyz", "pdfs", "PanjGranthi", "GauriBavanAkahri.pdf"]
    const haveLink = avaliableAudios.some(
      (audioType) => audioType === splits[4]
    )
    if (!haveLink) return false

    let pathToLink = './audios/'
    for (let i = 4; i < splits.length; i++) {
      if (i === splits.length - 1) {
        pathToLink += splits[i].replace('.pdf', '.mp3')
        continue
      }
      pathToLink += splits[i] + '/'
    }
    return pathToLink
  }
  const linkSplt = link.split('pdfs')
  const mp3Link = getAudioUrl(link)
  const pdfLink = 'lib/web/viewer.html?file=../../pdfs' + linkSplt[1]

  console.log(pdfLink, mp3Link, link)
  const { innerWidth: width, innerHeight: height } = window
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pdf: {
      width: width * 0.95,
      height: height,
    },
    audio: {
      width: width * 0.95,
    },
  }
  return (
    <div>
      <a href={link} target='_blank' rel='noreferrer'>
        <h1 style={styles.title}>{title}</h1>
      </a>
      {mp3Link ? (
        <audio style={styles.audio} src={mp3Link} controls/>
      ) : (
        <></>
      )}
      <div style={styles.container}>
        <iframe
          src={pdfLink}
          style={styles.pdf}
          title='webviewer'
          // width={width*0.9}
          // height={height*0.9}
          // id="pdf-js-viewer"
          // frameborder="0"
        ></iframe>
      </div>
    </div>
  )
}

function AppleStoreJoke() {
  return (
    <div>
      <h1>SIKEEEEEEEEE</h1>
      <h2>
        Unfortunately you have made the Wrong Decision by choosing an
        iphone.🤢🤮
      </h2>
      All jokes aside, will be trying to make the ios version soon. Until then,
      think about the wrong Decision you made by choosing an iphone. Vaheguru
    </div>
  )
}

// function OpenPdfDesktop({ link, title }) {
//   const { innerWidth: width, innerHeight: height } = window;
//   return (
//     <div >
//       <h1>{title}</h1>
//       <embed src={link} width={width} height={height} />
//     </div>
//   );
// }
// function OpenPdfTest({link,title}) {
// }

export default App
