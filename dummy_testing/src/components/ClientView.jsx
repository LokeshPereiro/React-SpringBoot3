import PropTypes from "prop-types";

export const ClientView = ({ clientName, lastName, address }) => {
  return (
    <>
      <ul className="list-group mb-3">
        <li className="list-group-item">Nombre: {clientName}</li>
        <li className="list-group-item">Apellido: {lastName}</li>
        <li className="list-group-item">Direccion: {address.country}</li>
      </ul>
    </>
  );
};

ClientView.propTypes = {
  clientName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
  address: PropTypes.object,
};
