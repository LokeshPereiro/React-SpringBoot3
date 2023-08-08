import PropTypes from "prop-types";
export const CompanyView = ({ title, company }) => {
  const { companyName, fiscalNumber } = company;

  return (
    <>
      <h3>{title}</h3>

      <ul className="list-group mb-3">
        <li className="list-group-item">Nombre: {companyName}</li>
        <li className="list-group-item">Nº fiscal: {fiscalNumber}</li>
      </ul>
    </>
  );
};

CompanyView.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.object,
};
