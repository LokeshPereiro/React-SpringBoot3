import { useContext, useEffect, useState } from "react";
import { UserForm } from "../../components/UserForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const RegisterPage = () => {
  const { users = [], initialEmptyFields } = useContext(UserContext);

  const [selectedUser, setSelectedUser] = useState(initialEmptyFields);

  const { id } = useParams();

  useEffect(() => {
    // console.log(id);
    if (id) {
      const user = users.find((u) => u.id == id) || initialEmptyFields;
      setSelectedUser(user);
    }
  }, [id]);

  return (
    <div className="container my-4">
      <h4>{selectedUser.id > 0 ? "Editar Usuario" : "Registrar Usuario"}</h4>

      <div className="row">
        <div className="col">
          <UserForm selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};
