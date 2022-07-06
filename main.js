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
