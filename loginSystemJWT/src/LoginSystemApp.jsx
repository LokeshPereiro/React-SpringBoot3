import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: "Pocholo",
    password: "2344",
    email: "pocholo@correo.com",
  },
];
const initialEmptyFields = {
  username: "",
  password: "",
  email: "",
};
function LoginSystemApp() {
  const [users, dispatchUsers] = useReducer(usersReducer, initialUsers);

  const handleAddNewUsers = (newUser) => {
    // console.log(newUser);
    dispatchUsers({
      type: "Add_User",
      payload: newUser,
    });
  };
  const handleDeleteUsers = (id) => {
    dispatchUsers({
      type: "Delete_User",
      payload: id,
    });
  };
  return (
    <div className="container my-4">
      <h1>LoginSystemApp</h1>
      <div className="row">
        <div className="col">
          <UserForm
            initialEmptyFields={initialEmptyFields}
            handleAddNewUsers={handleAddNewUsers}
          />
        </div>
        <div className="col">
          {/* <UsersList users={initialUsers} /> */}
          {users.length === 0 ? (
            <div className="alert alert-danger">No hay usuarios..</div>
          ) : (
            <UsersList users={users} handleDeleteUsers={handleDeleteUsers} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginSystemApp;
