const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filteredArray = filterRange(arr, 3, 7);


function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b)
}

console.log(filteredArray); // [3, 4, 5, 6, 7]
      
