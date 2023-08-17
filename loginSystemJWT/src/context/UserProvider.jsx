import { UserContext } from "./UserContext";
import { useUsersData } from "../hooks/useUsersData";
export const UserProvider = ({ children }) => {
  const {
    users,
    selectedUser,
    initialEmptyFields,
    showFormulario,
    handleAddNewUsers,
    handleDeleteUsers,
    handleSelectedUserForm,
    handleOpenForm,
    handleCloseForm,
    getUsers,
  } = useUsersData();

  return (
    <UserContext.Provider
      value={{
        users,
        selectedUser,
        initialEmptyFields,
        showFormulario,
        handleAddNewUsers,
        handleDeleteUsers,
        handleSelectedUserForm,
        handleOpenForm,
        handleCloseForm,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
