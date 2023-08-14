import { useState } from "react";
import Swal from "sweetalert2";
const initialLogin = {
  username: "",
  password: "",
};
export const LoginPage = ({ handleLogin }) => {
  const [loginForm, setLoginForm] = useState(initialLogin);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };
  const onSubmitForm = (evt) => {
    evt.preventDefault();

    handleLogin({ username, password });

    if (!username || !password) {
      Swal.fire("Campos vacíos", "Todos los campos con obligatorios", "error");
      return;
    }

    setLoginForm(initialLogin);
  };
  return (
    <>
      <div className="modal" style={{ display: "block" }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login Page</h5>
            </div>
            <form onSubmit={onSubmitForm}>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control my-3 w-75"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={onInputChange}
                />
                <input
                  type="password"
                  className="form-control my-3 w-75"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={onInputChange}
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
