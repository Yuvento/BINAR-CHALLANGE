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




