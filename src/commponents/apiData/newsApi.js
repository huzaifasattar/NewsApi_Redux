const linkURL = "https://newsapi.org/v2/everything";
const apiKey = "c297528c4a4248a291279c747daa60d0";

const genreteNews = (objItem = {}) => {
  let query = "";
  const objlist = Object.keys(objItem);

  objlist.forEach(
    (key, i) => (query += `${i === 0 ? "?" : "&"}${key}=${objItem[key]}`)
  );
  return query;
};

export const NewsFlow = (newData) => {
  const objFile = { ...newData, apiKey };
  const queryParams = genreteNews(objFile);

  return fetch(`${linkURL}${queryParams}`);
};


