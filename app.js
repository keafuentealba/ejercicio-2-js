
//lo argumentoas es una variable que recibe los valores que se le pasan a una fuNcion
const invertir = (arreglo) => {
  let aux = []; // corchetes son arrays
  for(let i = arreglo.length - 1; i >= 0; i--){
    aux[arreglo.length - 1 - i] = arreglo[i]
  }
  return aux;
}
