/**
   Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
   Function tersebutakan mengembalikan true, jika array dari parameter tersebut merupakan deret aritmatika 
      dan false jika sebaliknya.
    
    Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
    Contoh: 
    - 2, 4,6, 8 adalah deret aritmatika dengan pertambahan nilai sebesar 2, 
    - 2, 4, 6, 9 bukanlah deret aritmatika karena ada perbedaan selisih antar angka yang tidak konsisten.

 */

function isArithmeticProgression(numbers) {
   // your code here
   let delta = 0;
   let mark = 0;
   let max_iterasi = numbers.length - 1;

    for (let index = 0; index < numbers.length; index++) {
      if ((index + 1) < max_iterasi) {
         delta = numbers[index+1] - numbers[index];
         if (index == 0 ) mark = delta;
         else if (delta != mark) return false;
      }
    }
    return true;
}

// Test Cases
console.log("Ini 1 : " + isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
console.log("Ini 2 : " + isArithmeticProgression([2, 4, 6, 12, 24])); // false
console.log("Ini 3 : " + isArithmeticProgression([2, 4, 6, 8])); // true
console.log("Ini 4 : " + isArithmeticProgression([2, 6, 18, 54])); // false
console.log("Ini 5 : " + isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false
