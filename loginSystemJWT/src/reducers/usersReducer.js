export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "Add_User":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];

    case "Update_User":
      break;

    case "Delete_User":
      return state.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
};
