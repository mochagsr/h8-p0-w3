function balikKata(str) {
  let output = ''
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i]
  }
  return output
}

console.log(balikKata('hello world!'));

//input "hello world!"
//output
// "!dlrow olleh"