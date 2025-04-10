const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  if (index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length) {
    [array[index1], array[index2]] = [array[index2], array[index1]];
  } else {
    console.log("No existe indice");
  }

  return array;
}

console.log(swap(fantasticFour, 1, 2));