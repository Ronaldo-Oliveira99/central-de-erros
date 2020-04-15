import erros from "../data/erros.json";

function api() {
  return new Promise(resolve => {
    setTimeout(() => {
      // if (slug) {
      resolve(erros);
      // } else {
      //   resolve(threads);
      // }
    }, 1500);
  });
}

function getErros() {
  return api()
    .then(response => response)
    .catch(e => []);
}

export default getErros;
