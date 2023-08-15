import { useContext } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";

export const LandingPage = () => {
  const { users, showFormulario, handleOpenForm } = useContext(UserContext);
  return (
    <>
      <div className="container my-4">
        <h1>Basic Login System</h1>
        <div className="row">
          {!showFormulario || <UserModalForm />}

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
              <UsersList />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
