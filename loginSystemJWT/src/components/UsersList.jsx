import { UserRow } from "./UserRow";

export const UsersList = ({
  users = [],
  handleDeleteUsers,
  handleSelectedUserForm,
}) => {
  return (
    <div>
      <h4>Lista de Usuarios</h4>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>UpdateModal</th>
            <th>UpdateRoute</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              handleDeleteUsers={handleDeleteUsers}
              handleSelectedUserForm={handleSelectedUserForm}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
