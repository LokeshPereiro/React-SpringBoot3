import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

export const UserForm = ({ selectedUser, handleCloseForm }) => {
  const { initialEmptyFields, handleAddNewUsers } = useContext(UserContext);

  const [userForm, setUserForm] = useState(initialEmptyFields);
  const { id, username, password, email } = userForm;

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  const onSubmitForm = (evt) => {
    evt.preventDefault();
    // if (!username || (!password && id === 0) || !email) {
    //   Swal.fire({
    //     position: "top-center",
    //     icon: "error",
    //     title: "Rellena todos los campos!",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    //   return;
    // }

    handleAddNewUsers(userForm);
    setUserForm(initialEmptyFields);
  };
  const onCloseForm = () => {
    handleCloseForm();
    setUserForm(initialEmptyFields);
  };
  useEffect(() => {
    setUserForm({
      ...selectedUser,
      // password: ""
    });
  }, [selectedUser]);

  return (
    <form onSubmit={onSubmitForm}>
      <input
        className="form-control my-3 w-7"
        placeholder="Escribe tu nombre"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {id > 0 || (
        <input
          className="form-control my-3 w-7"
          placeholder="Contraseña**"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      )}

      <input
        className="form-control my-3 w-7"
        placeholder="Tu corre@"
        type="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input type="hidden" name="id" value={id} />

      <button type="submit" className="btn btn-success">
        {id > 0 ? "Actualizar" : "Añadir"}
      </button>

      {!handleCloseForm || (
        <button className="btn btn-secondary mx-2" onClick={onCloseForm}>
          Cerrar
        </button>
      )}
    </form>
  );
};
