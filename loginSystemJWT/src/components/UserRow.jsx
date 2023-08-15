import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const UserRow = ({ user }) => {
  const { handleDeleteUsers, handleSelectedUserForm } = useContext(UserContext);

  const onRemoveUser = (id) => {
    handleDeleteUsers(id);
  };

  const onSelectedUser = (userData) => {
    handleSelectedUserForm(userData);
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>

      <td>
        <button
          className="btn btn-warning"
          onClick={() =>
            onSelectedUser({
              id: user.id,
              username: user.username,
              email: user.email,
            })
          }
        >
          Update
        </button>
      </td>

      <td>
        <NavLink className={"btn btn-secondary"} to={`/users/edit/${user.id}`}>
          Update
        </NavLink>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => onRemoveUser(user.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
