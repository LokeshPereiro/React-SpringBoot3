import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";

export const LandingPage = ({
  users,
  selectedUser,
  initialEmptyFields,
  showFormulario,
  handleAddNewUsers,
  handleDeleteUsers,
  handleSelectedUserForm,
  handleOpenForm,
  handleCloseForm,
}) => {
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

          <div className="col">
            {/* <UsersList users={initialUsers} /> */}
            {showFormulario || (
              <button className="btn btn-primary my-2" onClick={handleOpenForm}>
                Nuevo Usuario
              </button>
            )}

            {users?.length === 0 ? (
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
};
