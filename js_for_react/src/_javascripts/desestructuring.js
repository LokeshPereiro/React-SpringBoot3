const user = {
  useraname: "Lokesh Pereiro",
  email: "lokesh@lok.com",
  age: 26,
};

// const { useraname, email, age } = user;
// console.log(`Nombre: ${useraname} - Correo: ${email} - Años: ${age}`);

//Desestructuring de una funcion, muy usado en React
const userDetails = () => {
  const { useraname, email, age } = user;
  console.log(`Nombre: ${useraname} - Correo: ${email} - Años: ${age}`);
};
userDetails(user);

const people = ["Jaimito", "Pepe", "Pepa", "Ramon", "Roberto"];

const [x, y, z, ...rest] = people;

console.log(x, y, z, rest);
