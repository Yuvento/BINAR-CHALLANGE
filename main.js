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

