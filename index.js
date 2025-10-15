import 'process';
import chalk from 'chalk';

const url = 'https://fakestoreapi.com/';

function API(method, ...rest) {
  let response = '';
  const endpoint = url + arguments[1];
  console.log('Argumentos: ', arguments);

  //   fetch(endpoint, req);
}

switch (process.argv[2]) {
  case 'GET':
    if (process.argv[3] === 'products') {
      API('GET', 'products');
    }
    break;
  default:
    console.log(
      `Ingrese el método de la solicitud ("GET, POST o DELETE") seguido de los argumentos que sean necesarios:

    Caso ${chalk.bgGreen(' GET ')}:
        "products" para traer todos los productos o "products/[id]" para traer uno solo.

    Caso ${chalk.bgBlue(' POST ')}:
        "[título]" "[precio]" "[categoría]".
        
    Caso ${chalk.bgRed(' DELETE ')}:
        "products/[id]".
            `
    );
}
