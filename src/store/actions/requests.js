const API_KEY = "4c36f0a6e0054f99be5aaa4782838a91";
let date = new Date().toISOString();

export const requests = {
  getArticles: `/top-headlines?country=us&apiKey=${API_KEY}`,
  getWorldNews: `/top-headlines&apiKey=${API_KEY}`,
  getKeyword: `/everything?q=queryhere&from=${date.substr(
    0,
    10
  )}&sortBy=popularity&apiKey=${API_KEY}`,
};
