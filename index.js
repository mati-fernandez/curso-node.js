import 'process';
import chalk from 'chalk';

const uri = 'https://fakestoreapi.com/';
let [, , method, resource, ...params] = process.argv;
method = method?.toUpperCase();
const endpoint = uri + resource;
const options =
  method === 'POST'
    ? {
        method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          title: params[0],
          price: Number(params[1]),
          category: params[2],
        }),
      }
    : { method };
const instructions = `${chalk.underline(
  'Ingrese el método de la solicitud (GET, POST o DELETE) seguido de los argumentos que sean necesarios:'
)}

    Caso ${chalk.bgGreen.bold(' GET ')}:
        "products" para traer todos los productos o "products/[id]" para traer uno solo.

    Caso ${chalk.bgBlue.bold(' POST ')}:
        "[título]" "[precio]" "[categoría]".
        
    Caso ${chalk.bgRed.bold(' DELETE ')}:
        "products/[id]".
            `;

if (['GET', 'POST', 'DELETE'].includes(method) && resource) {
  fetch(endpoint, options)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.error('Error:', err.message);
      console.log(instructions);
    });
} else {
  console.log(instructions);
}
