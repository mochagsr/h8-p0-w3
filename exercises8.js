function pasanganTerbesar(num) {
  // you can only write your code here!
  let stringNum = String(num)
  // console.log(stringNum[0]);
  let max = stringNum[0] + stringNum[1]
  for (let i = 0; i < stringNum.length; i++) {
    // console.log(stringNum[i]);
    let nilaiSekarang = stringNum[i] + stringNum[i + 1]
    if (max < nilaiSekarang) {
      max = nilaiSekarang
    }
  }
  return Number(max)
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99