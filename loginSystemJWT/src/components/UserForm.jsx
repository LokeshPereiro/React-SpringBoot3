import { useState } from "react";

export const UserForm = ({ handleAddNewUsers, initialEmptyFields }) => {
  const [userForm, setUserForm] = useState(initialEmptyFields);
  const { username, password, email } = userForm;

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
    if (!username || !password || !email) {
      alert("Campos Vacíos!!");
      return;
    }
    handleAddNewUsers(userForm);
    setUserForm(initialEmptyFields);
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input
        className="form-control my-3 w-7"
        placeholder="Escribe tu nombre"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-7"
        placeholder="Contraseña**"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-7"
        placeholder="Tu corre@"
        type="email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-success">
        Añadir
      </button>
    </form>
  );
};
