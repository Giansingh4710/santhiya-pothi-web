
export function get_all_pdfs(obj) {
  const isPdf = Object.keys(obj).some((key) => key === "uri");
  if (isPdf) {
    return true;
  }

  const allPdfs = {};
  for (const key in obj) {
    const otherPdfs = get_all_pdfs(obj[key]);
    if (otherPdfs === true) {
      allPdfs[key] = obj[key];
    } else {
      Object.assign(allPdfs, otherPdfs);
    }
  }
  return allPdfs;
}

