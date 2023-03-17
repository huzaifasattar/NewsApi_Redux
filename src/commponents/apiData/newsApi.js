const linkURL = "https://newsapi.org/v2/everything";
const apiKey = "c297528c4a4248a291279c747daa60d0";

const genreteNews = (objItem = {}) => {
  let queryList = "";
  const objlist = Object.keys(objItem);

  objlist.forEach(
    (key, i) => (queryList += `${i === 0 ? "?" : "&"} ${key}=${objItem[key]}`)
  );
  return queryList;
};

const NewsFlow = (newData) => {
  const objFile = { ...newData, apiKey };
  const query = genreteNews(objFile);

  return fetch(`${linkURL} ${query}`);
};
export default NewsFlow;
