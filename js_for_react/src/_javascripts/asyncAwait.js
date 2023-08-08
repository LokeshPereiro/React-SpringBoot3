const httpClient = fetch("https://jsonplaceholder.typicode.com/posts");

// httpClient.then((response) => {
//   //   console.log(response);
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// httpClient.then((res) => res.json()).then((data) => console.log(data));

//AsyncAwait normalmente se usa dentro de una funcion
// const findAllUser = async () => {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   return await resp.json();
// };

// const users = await findAllUser();
// console.log(users);

//DOM
const findAllUser = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();

  const ul = document.createElement("ul");

  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = element.name;
    ul.append(li);
  });
  document.getElementById("root").append(ul);
};
findAllUser();
