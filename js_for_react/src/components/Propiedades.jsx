import PropTypes from "prop-types";

export const Propiedades = ({ user, titulo, numero }) => {
  //En el jsx puede imprimir las propiedades pero no el obj completo..
  //Si quisiera mostrar el obj tendría que convertilo en string
  return (
    <div>
      <div>{JSON.stringify(user)}</div>
      <br />
      <p>{titulo}</p>
      <p>{numero}</p>
    </div>
  );
};
Propiedades.propTypes = {
  user: PropTypes.object,
  titulo: PropTypes.string.isRequired,
  numero: PropTypes.number,
};
Propiedades.defaultProps = {
  titulo: "Titulo Default",
};
