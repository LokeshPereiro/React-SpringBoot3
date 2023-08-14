export const UserRow = ({
  user,
  handleDeleteUsers,
  handleSelectedUserForm,
}) => {
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
