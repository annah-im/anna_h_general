/**
 * Print 1..100 numbers by using recursion
 * @param {*} n 
 */
function printNums(n) {
  console.log(n + " number"), n < 100 ? (printNums(++n)) : null
}

printNums(1);
