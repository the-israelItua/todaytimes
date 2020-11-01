import { combineReducers } from "redux";
import { articlesReducer } from "./articlesReducer";
import { sidebarReducer } from "./sidebarReducer";

export const reducers = combineReducers({
  articles: articlesReducer,
  sidebar: sidebarReducer,
});
