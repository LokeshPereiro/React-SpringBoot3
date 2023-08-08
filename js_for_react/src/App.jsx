import { ContadorApp } from "./components/ContadorApp";
import { Propiedades } from "./components/Propiedades";
import { TemplateSpring } from "./components/TemplateSpring";
// import { sayHello, funcionSumar, invoice } from "./_javascripts/funciones";

// console.log(sayHello("Pepe"));

function App() {
  // const sumaTotal = funcionSumar(5, 7);
  // console.log(sumaTotal);

  // const greet = invoice.saludos();
  // console.log(greet);

  // const tot = invoice.total();
  // console.log(tot);
  return (
    <>
      {/* <p>La suma total es: {sumaTotal}</p> */}
      <h1>JavaScript for React!</h1>
      <TemplateSpring />
      <Propiedades
        user={{ nombre: "Pepe", apellido: "Suarez", edad: "20" }}
        numero={500}
      />
      <ContadorApp />
    </>
  );
}

export default App;
