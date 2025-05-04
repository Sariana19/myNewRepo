//Just adding comments to check if this thing actually works,okay!!!

function doubleResult(func) {
  return function(x) {
    return 18 * func(x);
  };
}

// A basic function that squares a number
function square(n) {
  return n * n;
}

// Wrap square with doubleResult
const doubledSquare = doubleResult(square);Do not stress
You got this in the bag,Masariki dont be scared its gonna be alright
console.log(doubledSquare(3)); // Output: 18 (3*3 = 9, then 9*2 = 18)

