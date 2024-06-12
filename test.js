function printNums(n) {
  console.log(n + " number"), n < 100 ? (printNums(++n)) : null
}

printNums(1);
