import PropTypes from "prop-types";
export const TotalView = ({ total }) => {
  return <div className="badge bg-success">{total} €</div>;
};
TotalView.propTypes = {
  total: PropTypes.number,
};
