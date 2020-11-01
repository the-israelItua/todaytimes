export const articlesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return [action.payload];
    case "GET_WORLD":
      return [action.payload];
    case "GET_KEYWORD":
      return [action.payload];
    case "CLEAR_ARTICLES":
      return [];
    default:
      return state;
  }
};
