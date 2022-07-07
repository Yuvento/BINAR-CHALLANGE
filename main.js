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
function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let next = 0;
  for (let i = 0; i < n; i++) {
    n1 = n2;
    n2 = next;
    next = n1 + n2;
  }
  return next;
}

console.log(fibonacci(9));

//section 6, ex 21

const arr = [14, 58, 20, 77, 66, 82, 1, 67, 42, 4];
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
