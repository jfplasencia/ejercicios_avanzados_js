// Parte 1
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  console.log('No se encuentra en el array');
}

const mainCharacters = [
"Luke",
"Leia",
"Han Solo",
"Chewbacca",
"Rey",
"Anakin",
"Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

//Parte 2
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  console.log('No se encuentra en el array');
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  const newArray = [...array]; 
    if (index !== -1) {
      newArray.splice(index, 1); 
    }
  return newArray; 
}
const arrayUpdate = removeItem(mainCharacters, 'Han Solo');
console.log(arrayUpdate);
const arrayUpdate2 = removeItem(mainCharacters, 'Chewbacca');
console.log(arrayUpdate2);