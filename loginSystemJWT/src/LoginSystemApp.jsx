import { UserModalForm } from "./components/UserModalForm";
import { UsersList } from "./components/UsersList";
import { useUsersData } from "./hooks/useUsersData";

function LoginSystemApp() {
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
      <div className="container my-4">
        <h1>Basic Login System</h1>
        <div className="row">
          {!showFormulario || (
            <UserModalForm
              selectedUser={selectedUser}
              initialEmptyFields={initialEmptyFields}
              handleAddNewUsers={handleAddNewUsers}
              handleCloseForm={handleCloseForm}
            />
          )}

          {/* {!showFormulario || (
            <div className="col">
              <UserForm
                selectedUser={selectedUser}
                initialEmptyFields={initialEmptyFields}
                handleAddNewUsers={handleAddNewUsers}
                handleCloseForm={handleCloseForm}
              />
            </div>
          )} */}

          <div className="col">
            {/* <UsersList users={initialUsers} /> */}
            {showFormulario || (
              <button className="btn btn-primary my-2" onClick={handleOpenForm}>
                Nuevo Usuario
              </button>
            )}

            {users.length === 0 ? (
              <div className="alert alert-danger">No hay usuarios..</div>
            ) : (
              <UsersList
                users={users}
                handleDeleteUsers={handleDeleteUsers}
                handleSelectedUserForm={handleSelectedUserForm}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSystemApp;
