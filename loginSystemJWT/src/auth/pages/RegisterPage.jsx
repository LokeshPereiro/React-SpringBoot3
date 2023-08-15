import { useEffect, useState } from "react";
import { UserForm } from "../../components/UserForm";
import { useParams } from "react-router-dom";

export const RegisterPage = ({
  users = [],
  handleAddNewUsers,
  initialEmptyFields,
}) => {
  const [selectedUser, setSelectedUser] = useState(initialEmptyFields);

  const { id } = useParams();

  useEffect(() => {
    // console.log(id);
    const user = users.find((u) => u.id == id) || initialEmptyFields;
    setSelectedUser(user);
  }, [id]);

  return (
    <div className="container my-4">
      <h4>Register Page</h4>
      <div className="row">
        <div className="col">
          <UserForm
            selectedUser={selectedUser}
            handleAddNewUsers={handleAddNewUsers}
            initialEmptyFields={initialEmptyFields}
          />
        </div>
      </div>
    </div>
  );
};
