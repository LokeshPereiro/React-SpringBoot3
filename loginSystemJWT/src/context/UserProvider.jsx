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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
