function tentukanDeretAritmatika(arr) {
  let arit = true
  let selisih = arr[1] - arr[0]
  // console.log(selisih);
  for (let i = 0; i < arr.length - 1; i++) {
    if (selisih !== Math.abs(arr[i] - arr[i + 1])) {
      arit = false
      //console.log((arr[i] - arr[i + 1]));
    }
  }
  return arit
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false