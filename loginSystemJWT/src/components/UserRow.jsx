export const UserRow = ({ user, handleDeleteUsers }) => {
  const onRemoveUser = (id) => {
    handleDeleteUsers(id);
  };
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-secondary">Update</button>
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
