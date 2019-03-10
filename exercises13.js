function targetTerdekat(arr) {
  // you can only write your code here!
  let selisih = arr.length - 1
  let posisio = arr.indexOf('o')
  let posisix = []

  if (arr.indexOf('x') == -1) {
    return 0
  }

  for (let i = 0; i < arr.length; i++) { // nyari posisix
    if (arr[i] == 'x') {
      posisix.push(i)
    }
  }

  for (let j = 0; j < posisix.length; j++) {
    let selisihSementara = Math.abs(posisix[j] - posisio)
    if (selisihSementara < selisih) {
      selisih = selisihSementara
    }
  }
  return selisih

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2