import { UserForm } from "./UserForm";
export const UserModalForm = ({
  selectedUser,
  initialEmptyFields,
  handleAddNewUsers,
  handleCloseForm,
}) => {
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
                  initialEmptyFields={initialEmptyFields}
                  handleAddNewUsers={handleAddNewUsers}
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
