// angka genap

function solution(n){
    //tulis jawabanmu disini
    if(n>2 && n%2===0) {return "YES"}
    else {return "NO"}
}

// nilai ujian
function solution(n){
    // tulis jawabanmu disini
    
    if(n>=91) return "A";
    else if (n>=81 && n<91) return "B";
     else if (n>=71 && n<81) return "C";
      else if (n>=61 && n<71) return "D";
      else return "E";
}


// fizzbuzz
function solution(n){
    // tulis jawabanmu disini

    if(n%5===0&&n%3===0) return "FizzBuzz";
    else if(n%5===0) return "Fizz";
        else if(n%3===0) return "Buzz";
            else return -1;
            
}

//  serifikasi

function solution(n, b, p){
    let nilai = n - b;
    let total = nilai*-1;
    let total2 = b*3; 
    if((total2+total)>=p) return "YES";
    else return "NO";


    
}

// narik uang
function solution(x, y){
    // tulis jawabanmu disini
  let z= (y-x)-0.5;
  if(x<y&&x%5===0)return z;
  else return y;

   
}

// menghitung total
function solution(num){
    // tulis jawaban disini
    let sum=0;
    for(let i=0;i<=num;i++)
         sum+=i;
        return sum;
}

// jumlah digit angka

function solution(num){
    // tulis jawaban disini
      return String(num)
    .split('')
    .map(Number)
    .reduce((a,b)=>{return a+b},0);    
}

// item terbesar

function solution(arr){
    let max =  0;
    for(let i=0;i<arr.length;i++)
       if(arr[i]>max)

       max = arr[i];

       return max;

  
}