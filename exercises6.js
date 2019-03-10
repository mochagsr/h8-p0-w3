function angkaPalindrome(num) {
  // you can only write your code here!

  while (true) {
    num++
    let stringNum = String(num)
    let balikNum = stringNum.split('').reverse().join('')
    if (stringNum === balikNum) {
      return Number(stringNum)
    }
  }


}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001