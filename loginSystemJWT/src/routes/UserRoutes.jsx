import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Navbar } from "../auth/components/Navbar";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { useUsersData } from "../hooks/useUsersData";

export const UserRoutes = ({ login, handleLogOut }) => {
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
    <>
      <Navbar login={login} handleLogOut={handleLogOut} />

      <Routes>
        <Route
          path="users"
          element={
            <LandingPage
              users={users}
              selectedUser={selectedUser}
              initialEmptyFields={initialEmptyFields}
              showFormulario={showFormulario}
              handleAddNewUsers={handleAddNewUsers}
              handleDeleteUsers={handleDeleteUsers}
              handleSelectedUserForm={handleSelectedUserForm}
              handleOpenForm={handleOpenForm}
              handleCloseForm={handleCloseForm}
            />
          }
        />

        <Route
          path="users/register"
          element={
            <RegisterPage
              handleAddNewUsers={handleAddNewUsers}
              initialEmptyFields={initialEmptyFields}
            />
          }
        />

        <Route
          path="users/edit/:id"
          element={
            <RegisterPage
              users={users}
              handleAddNewUsers={handleAddNewUsers}
              initialEmptyFields={initialEmptyFields}
            />
          }
        />

        <Route path="/" element={<Navigate to={"/users"} />} />
      </Routes>
    </>
  );
};
