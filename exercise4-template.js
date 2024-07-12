/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function tambahkeun(array) {
    let value = 0;

    for (let i = 0; i < array.length; i++) value += array[i];
    return value;
}

function cari_max(array_fix, array_new) {
    if (array_fix.length == 0) {
        array_fix[0] = array_new;
        array_fix[1] = 0;
    }else if (array_fix[1] < tambahkeun(array_new)) {
        array_fix[0] = array_new;
        array_fix[1] = tambahkeun(array_new);
    }

    return array_fix;
}

function subArray(input) {
    //  your code here
    let array_temp = [];
    let array_fix = [];
    // let index = 1;                                               //  Untuk cek dan mempermudah

    for (let i = 2; i <= input.length; i++) {
        for (let j = 0; j <= (input.length - i); j++) {
            iterasi = 0;
            for (let k = j; k < input.length; k++) {
                if (iterasi == i) break;
                else array_temp.push(input[k]);
                iterasi ++;
            }
            array_fix = cari_max(array_fix, array_temp);
            // console.log("No " + index + " : " + array_fix);      //  Untuk cek dan mempermudah
            // index++;                                             //  Untuk cek dan mempermudah
            array_temp = [];
        }
    }

    return array_fix;
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
// let input = [2, 4, 6, 8, 10, 12, 14, 16]
console.log(subArray(input));
