import { Link, useParams } from "react-router-dom";
import ListDisplay from "./ListDisplay";
import BarOption from "./BarOption";
import PdfDisplay from "./PdfDisplay";

export default function OtherLists({ folderToFileData, allPdfs }) {
  const { title } = useParams();
  const folderGroup = folderToFileData[title];
  const pdfObj = allPdfs[title];

  if (folderGroup !== undefined) {
    return (
      <div className="App">
        <h1>{title}</h1>
        <ListDisplay dataObj={folderGroup} />
      </div>
    );
  }

  if (pdfObj !== undefined) {
    return <PdfDisplay link={pdfObj.uri} title={title} />;
  }

  return (
    <div className="App">
      <h1>Wrong link Entered</h1>
      <h3>'{title}' not valid</h3>
      <Link to={"/"}>
        <BarOption left={""} text={"Go Back"} />
      </Link>
    </div>
  );
}
