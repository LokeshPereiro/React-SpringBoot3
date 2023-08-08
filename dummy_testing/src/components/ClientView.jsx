import PropTypes from "prop-types";

export const ClientView = ({ title, client }) => {
  const { firstName, lastName, address } = client;

  return (
    <>
      <h3>{title}</h3>
      <ul className="list-group mb-3">
        <li className="list-group-item">Nombre: {firstName}</li>
        <li className="list-group-item">Apellido: {lastName}</li>
        <li className="list-group-item">Direccion: {address.country}</li>
      </ul>
    </>
  );
};

ClientView.propTypes = {
  title: PropTypes.string.isRequired,
  client: PropTypes.object,
};
