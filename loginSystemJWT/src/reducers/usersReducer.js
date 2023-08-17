export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "Add_User":
      return [
        ...state,
        {
          ...action.payload,
          //Ya viene del db
          // id: new Date().getTime(),
        },
      ];

    case "Update_User":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return { ...action.payload, password: u.password };
        }
        return u;
      });

    case "Delete_User":
      return state.filter((user) => user.id !== action.payload);

    case "Loading_Users":
      return action.payload;

    default:
      return state;
  }
};
