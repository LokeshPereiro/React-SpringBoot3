import { useContext } from "react";
import { UserForm } from "./UserForm";
import { UserContext } from "../context/UserContext";

export const UserModalForm = () => {
  const { selectedUser, handleCloseForm } = useContext(UserContext);
  return (
    <>
      <div className="abrir-modal animacion fadeIn">
        <div className="modal" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {selectedUser.id > 0
                    ? "Actualizar Usuario"
                    : "Añadir Usuario"}
                </h5>
              </div>
              <div className="modal-body">
                <UserForm
                  selectedUser={selectedUser}
                  handleCloseForm={handleCloseForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
