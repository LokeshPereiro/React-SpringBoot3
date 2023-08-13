import { useTransition } from "react";
import { UserRow } from "./UserRow";

export const UsersList = ({ users = [], handleDeleteUsers }) => {
  return (
    <div>
      <h4>Lista de Usuarios</h4>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Update</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              handleDeleteUsers={handleDeleteUsers}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
