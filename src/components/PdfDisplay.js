export default function OpenPdf({ link, title }) {
  const linkSplt = link.split("pdfs");
  const mp3Link = getAudioUrl(link);
  const pdfLink = "lib/web/viewer.html?file=../../pdfs" + linkSplt[1];

  console.log({ pdfLink, mp3Link, link });
  const { innerWidth: width, innerHeight: height } = window;
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    pdf: {
      width: width * 0.95,
      height: height,
    },
    audio: {
      width: width * 0.95,
    },
  };
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <h1 style={styles.title}>{title}</h1>
      </a>
      {mp3Link !== "" ? (
        <audio style={styles.audio} src={mp3Link} controls />
      ) : (
        <></>
      )}
      <div style={styles.container}>
        <iframe
          src={pdfLink}
          style={styles.pdf}
          title="webviewer"
          // width={width*0.9}
          // height={height*0.9}
          // id="pdf-js-viewer"
          // frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

function getAudioUrl(pdfUrl) {
  const avaliableAudios = ["BaiVarra", "BhagatBani", "PanjGranthi"];
  const splits = pdfUrl.split("/"); // ["https:", "", "santhiyapothi.xyz", "pdfs", "PanjGranthi", "GauriBavanAkahri.pdf"]
  const haveLink = avaliableAudios.some((audioType) => audioType === splits[4]);
  if (!haveLink) return "";

  let pathToLink = "audios/";
  for (let i = 4; i < splits.length; i++) {
    if (i === splits.length - 1) {
      pathToLink += splits[i].replace(".pdf", ".mp3");
      continue;
    }
    pathToLink += splits[i] + "/";
  }
  return pathToLink;
}
