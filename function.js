//Just adding comments to check if this thing actually works,okay!!!

function doubleResult(func) {
  return function(x) {
    return 2 //just gonna add this to create merge conflicts
  };
}

// A basic function that squares a number
function square(n) {
  return n * n;
}

// Wrap square with doubleResult
const doubledSquare = doubleResult(square);

console.log(doubledSquare(3)); // Output: 18 (3*3 = 9, then 9*2 = 18)

