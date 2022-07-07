// Ario - Pengkondisian - Sertifikasi
function solution(n, b, p){
  // tulis jawabanmu disini
  let pointBenar = b*3;
  let pointSalah = (n - b)*-1;
  if (pointBenar + pointSalah >= p) return 'YES';
  else return 'NO';
}

// Ario - Perulangan - Pinjam uang
function solution(k, m, n){
  // tulis jawabanmu disini
  let harga = 0
  for (let i = 1; i <= n; i++) {
      harga += i*k;
  }
  let utang = harga-m;
  if (utang > 0) return utang;
  else return 0;
}



// Ario - Array - Array dua dimensi
function solution(arr){
  // tuliskan jawabanmu disini
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
      let counter = 0;
      for (let j = 0; j < 3; j++) {
          if (arr[i][j] === 1) counter++;
      }
      if (counter >= 2) result++;
  }
  return result;
}

//Jason
//Soal-1 Pengkondisian(Sertifikat)
let cek = (n,b,p) => {
  let nilai = b*3 - (n-b);
  if(nilai>=p){
      return "YES";
  }
  else{
      return "NO";
  }
}
console.log(cek(6,3,6));


//Soal-2 Perulangan(Pinjam Uang)
let hitung = (k,m,n) => {
  let total=0;
  let inc=k;
  for(let i=0;i<n;i++){
      total+=k;
      k+=inc;
  }
  return (total>m ? total-m : 0);
}

console.log(hitung(3,17,4));

//Soal-3 Array(item terkecil)
let cari = (arr) => {
  let min = arr[0];
  for(let i=0;i<arr.length;i++){
      if(arr[i]< min){
          min=arr[i];
      }
  }
  return min;
}

console.log(cari([9,4,3,5,4,1,4,2]));
console.log(cari([2,4,7,28,9,10,3]));

// =================== Afrizal ===================

//section 4, ex 2
function solution(n) {
  if (n >= 91) return "A";
  else if (n >= 81) return "B";
  else if (n >= 71) return "C";
  else if (n >= 61) return "D";
  else return "E";
}

console.log(solution(92));

//section 5, ex 10
function fibonacci(n){
  let n1 = 0;
  let n2 = 1;
  let next = 0;
  for (let i = 0; i < n ; i++) {
    n1 = n2;
    n2 = next;
    next = n1+n2;
  }
  return next;
}

console.log(fibonacci(9));

//section 6, ex 21

const arr = [14, 58, 20, 77, 66, 82, 1, 67, 42, 4]
function smallest(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(smallest(arr));


// 7 : Jumlah Digit Angka
function solution_7(num){
  // tulis jawaban disini
  var total = 0; 
  for(var p = 0; p < (num.toString()).length; p++){
      total += parseInt((num.toString())[p])
  }
  return total;
}

// 8 : Tabungan
function solution_8(n, m){
  //tulis jawabanmu disini
  var person1 = n;
  var person2 = m;
  var tahun = 0;
  while(person1 <= person2){
      person1 *= 3;
      person2 *= 2;
      tahun++;
  }
  return tahun;
}

// 9 : Faktorial
function solution(n){
  // tulis jawabanmu disini
  var faktorial = 1;
  for(var i = n; i > 0; i--){
      faktorial *= i;
  }
  return faktorial;
}

// 10 : Fibonaci

function solution(){
  // tulis jawabanmu disini

}

// 11 : Pinjam uang
function solution(k, m, n){
  // tulis jawabanmu disini
  var totalHarga = 0;
  for(var i = 1; i <= n; i++){
      totalHarga += i*k;
  }
  if(totalHarga >= m){
      return totalHarga - m;
  } else {
      return 0;
  }
  
}

// 13 : Membandingkan 2 array
// function solution(arr1, arr2){
//     // tulis jawabanmu disini
     // MAKSUD DARI STRING OUTPUT MASIH RANCU
//     var consArr1 = 0;
//     var consArr2 = 0;
//     for(var p = 0; p < arr1.length; p++){
//         if(arr1[p] == arr2[p]){
//            consArr1++;
//            consArr2++; 
//         } else if( arr1[p] > arr2[p]){
//             consArr1++;
//         } else {
//             consArr2++;
//         }
//     }
//     return consArr1 + " : " + consArr2
// }

// 14 : Array 2 dimensi
function solution(arr){
  // tuliskan jawabanmu disini
  var countAll = 0;
  for(var p = 0; p < arr.length; p++){
      var count1 = 0;
      for(var k = 0; k < arr[p].length; k++){
          if(arr[p][k]== 1){
              count1++;
          }
      }
      if(count1 >= 2){
          countAll++;
      }
  }
  return countAll;
}

// 15 : Unik Item
function solution(arr){
  //tulis jawabanmu disini
  var count = 0;
  for(var i = 0; i < arr.length-1; i++){
      var same = 0;
      for(var k = i+1; k < arr.length; k++){
          if(arr[i]== arr[k]){
              same++;
          }
      }
      if(same >0){
          count++;
      }
  }
  return count;
}

// 16 : Tahun genap atau ganjil
function solution_16(arr){
  // tulis jawabanmu disini
  // Kunci Salah atau saya yang salah //
  const newArr = [];
  for(var p = 0; p < arr.length; p++){
      var count = 0
      for(var k = 0; k < arr[p].length; k++){
          count += parseInt(arr[p][k]);
      }
      count % 2 == 0 ? newArr[p] = "Genap" : newArr[p] = "Ganjil";
  }
  return newArr;
}



// 17 Fizzbuzz: 
// by: patarebenezer
function fizzBuzz(n) {
  if (n % 15 === 0) 
    console.log("FizzBuzz");
  else if (n % 3 === 0) 
    console.log("Buzz");
  else if (n % 5 === 0) 
    console.log("Fizz");
  else 
    console.log(n);
}

fizzBuzz(15);
