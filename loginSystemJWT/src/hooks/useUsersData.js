import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [];
const initialEmptyFields = {
  id: 0,
  username: "",
  password: "",
  email: "",
};
const initialErrors = {
  username: "",
  password: "",
  email: "",
};
export const useUsersData = () => {
  const [users, dispatchUsers] = useReducer(usersReducer, initialUsers);
  const [selectedUser, setSelectedUser] = useState(initialEmptyFields);
  const [showFormulario, setShowFormulario] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const getUsers = async () => {
    const result = await findAll();
    // console.log(result);
    dispatchUsers({
      type: "Loading_Users",
      payload: result.data,
    });
  };

  const handleAddNewUsers = async (newUser) => {
    // console.log(newUser);
    //Iniciamos el id en 0 si no se nos crearía el obj duplicado con info actualizado en vez de actualizar el mismo obj
    // let type = newUser.id === 0 ? ("Add_User") : ("Update_User");

    let response;

    try {
      if (newUser.id === 0) {
        response = await save(newUser);
      } else {
        response = await update(newUser);
      }

      dispatchUsers({
        type: newUser.id === 0 ? "Add_User" : "Update_User",
        payload: response.data,
      });
      Swal.fire(
        newUser.id === 0 ? "Nuevo Usuario" : "Actualizar Usuario",
        newUser.id === 0
          ? "Usuario registrado con éxito!"
          : "Usuario actualizado con éxito!",
        "success"
      );
      handleCloseForm();
    } catch (error) {
      // setErrors(error);
      if (error.response && error.response.status == 400) {
        console.log(error.response.data);
      }
    }
  };

  const handleDeleteUsers = (id) => {
    Swal.fire({
      title: "Estas seguro que quieres eliminar a este usuario?",
      text: "Cuidado, el usuario será eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      dispatchUsers({
        type: "Delete_User",
        payload: id,
      });

      if (result.isConfirmed) {
        remove(id);
        Swal.fire(
          "Usuario Eliminado",
          "Se eliminó al usuario con éxito",
          "success"
        );
      }
    });
  };
  const handleSelectedUserForm = (updatingUser) => {
    // console.log(updatingUser);
    setShowFormulario(true);
    setSelectedUser({
      ...updatingUser,
    });
  };
  const handleOpenForm = () => {
    setShowFormulario(true);
  };
  const handleCloseForm = () => {
    setShowFormulario(false);
    setSelectedUser(initialEmptyFields);
  };
  return {
    users,
    selectedUser,
    initialEmptyFields,
    showFormulario,
    errors,
    handleAddNewUsers,
    handleDeleteUsers,
    handleSelectedUserForm,
    handleOpenForm,
    handleCloseForm,
    getUsers,
  };
};
