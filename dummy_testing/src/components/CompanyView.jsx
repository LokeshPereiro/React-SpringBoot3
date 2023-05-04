import PropTypes from "prop-types";
export const CompanyView = ({ companyName, fiscalNumber }) => {
  return (
    <>
      <ul className="list-group mb-3">
        <li className="list-group-item">Nombre: {companyName}</li>
        <li className="list-group-item">Nº fiscal: {fiscalNumber}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  companyName: PropTypes.string,
  fiscalNumber: PropTypes.number,
};
