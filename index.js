function pow(num = +prompt(" Число"), degree = +prompt(" Ступінь")) {
  if (isNaN(degree) || isNaN(num) || num == null || degree == null) {
    return pow();
  }
  // let result;
  return console.log(num ** degree);
}

pow();
