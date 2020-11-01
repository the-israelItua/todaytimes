export const sidebarReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_SIDEBAR":
      return !state;
    default:
      return state;
  }
};
