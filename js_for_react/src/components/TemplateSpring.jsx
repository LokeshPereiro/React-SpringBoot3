export const TemplateSpring = () => {
  let firstName = "Jaimito";
  firstName = "Lokesh";

  const lastName = "Pereiro";
  const fullName = `Mi nombre es ${firstName} ${lastName}`;

  return (
    <div>
      <h3>{fullName}</h3>
    </div>
  );
};
