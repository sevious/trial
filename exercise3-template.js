/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

function noDuplicate(array, value) {
  if (array.length != 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == value) return false;
    }
  }
  return true;
}

function sumArray(arr, target) {
    // your code here
    let fix_array = [];
    let duplicate_array = [];
    let lengthx = arr.length;

    for (let index = 0; index < lengthx; index++) {
      for (let index2 = (index + 1); index2 < lengthx; index2++) {
        if (noDuplicate(duplicate_array, index)){
          if ((arr[index] + arr[index2]) == target) {
            fix_array.push([arr[index], arr[index2]]);
            duplicate_array.push(index2);
            temp_array = [];
          }
        }
        
      }
    }
    return fix_array;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []


