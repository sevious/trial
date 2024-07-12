/**
Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang berjarak minimal 3 karakter lain (termasuk spasi). 
Jika tidak ditemukan sama sekali, kembalikan nilai false.

Contoh: 
barbarian akan mengembalikan nilai true
you are boring akan mengembalikan nilai true
bacon sand meat akan mengembalikan nilai false

 */ 

function check_ab(char_x) {
    if ((char_x == 'a') || (char_x == 'b')) return true;
    else return false;
}

function threeStepsAB(text) {
    // your code here
    let lengthx = text.length;

    for (let index = 0; index < lengthx; index++) {
        if (check_ab(text[index])) {
            if ((index + 4) < lengthx) {
                if ((text[index] == 'a') && (text[index + 4] == 'b')) return true;
                else if ((text[index] == 'b') && (text[index + 4] == 'a')) return true;
                else return false;
            }else return false;
        }
    }
    return false;
}

// Test Cases
console.log(threeStepsAB("lane borrowed")); // true
console.log(threeStepsAB("i am sick")); // false
console.log(threeStepsAB("you are boring")); // true
console.log(threeStepsAB("barbarian")); // true
console.log(threeStepsAB("bacon and meat")); // false
console.log(threeStepsAB("arsyad")); // false

