const humburger = document.getElementById('nav-humburger')
let state = false;

humburger.addEventListener('click', function() {
  const listMenu = document.getElementById('nav-list-mobile');
  if(state) {
    listMenu.classList.remove("nav-list-mobile--show")
  }else {
    state = true;
    listMenu.classList.add("nav-list-mobile--show")
  }
})

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




