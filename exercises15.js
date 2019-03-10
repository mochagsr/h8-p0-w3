function groupAnimals(animals) {
  // you can only write your code here!
  let obj = {}
  for (let i = 0; i < animals.length; i++) {
    // console.log(animals[i]);
    if (obj[animals[i][0]] === undefined) {
      obj[animals[i][0]] = []
      obj[animals[i][0]].push(animals[i])
    } else {
      // obj[animals[i][0]] = []
      obj[animals[i][0]].push(animals[i])
    }

  }
  // Object.values(obj)
  let popo = Object.values(obj)
  popo.sort()
  // console.log(popo);
  return popo
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]