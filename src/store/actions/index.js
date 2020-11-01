import axios from "axios";
import { requests } from "./requests";

const baseUrl = "http://newsapi.org/v2";

export const getArticles = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}${requests.getArticles}`);
  dispatch({
    type: "GET_ARTICLES",
    payload: response,
  });
};

export const getWorld = () => async (dispatch) => {
  const response = await axios.get(`${baseUrl}${requests.getWorld}`);
  dispatch({
    type: "GET_WORLD",
    payload: response,
  });
};

export const getKeyword = (text) => async (dispatch) => {
  const queryUrl = requests.getKeyword.replace("queryhere", text);
  const response = await axios.get(`${baseUrl}${queryUrl}`);
  dispatch({
    type: "GET_KEYWORD",
    payload: response,
  });
};

export const clearArticles = () => {
  return {
    type: "CLEAR_ARTICLES",
  };
};

export const setSidebar = () => {
  return {
    type: "SET_SIDEBAR",
  };
};
