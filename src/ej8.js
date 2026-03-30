import { 
  OMDBSearchByPage,
  OMDBSearchComplete,
  OMDBGetByImdbID
} from './modules/omdb-wrapper.js';


const main = async () => {

  let resultado;

  resultado = await OMDBSearchByPage("cars", 1);
  console.log("Por página:", resultado);

  resultado = await OMDBSearchComplete("cars");
  console.log("Completo:", resultado);

  resultado = await OMDBGetByImdbID("tt0317219");
  console.log("Por ID:", resultado);

};

main();


