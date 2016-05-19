
function fibo(n) {
  var f = [];
  for (var c = 0; c < n; ++c) {
    f.push((c < 2) ? c : f[c-1] + f[c-2]);
  }
  return f;
}

Array.from(fibo(40))
  .filter(p => p < 4e6 && p%2==0)
  .reduce((p,c) => p+c);

/* http://gpiancastelli.github.io/project-euler-js/2.html */
function sumOfEven(limit) {
    var temp, sum = 0, a = 0, b = 1;
    while (b < limit) {
        temp = a;
        a = b;
        b += temp;
        if ((b & 1) === 0) {
            sum += b;
        }
    }
    return sum;
}

console.log(sumOfEven(4e6));

function isPrime(n){
  for(var i=2; i<n; ++i){
    if(n%i===0){
      return false
    }
  }
  return true;
}

function getFactors(integer){
  var factors = [];
  quotient = 0;
  for(var i=1; i<= integer; i++){
    quotient = integer/i;

    if(quotient === Math.floor(quotient)){
      factors.push(i);
    }
  }
  return factors;
}
