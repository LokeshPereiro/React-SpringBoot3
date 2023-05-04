import PropTypes from "prop-types";
export const InvoiceRef = ({ id, name }) => {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">ID: {id}</li>
        <li className="list-group-item">Bill: {name}</li>
      </ul>
    </>
  );
};

InvoiceRef.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
};
