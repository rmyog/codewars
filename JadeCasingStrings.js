/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
    Jaden-Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// let input = "How can mirrors be real if our eyes aren't real"
let input = "young jaden: here's the deal for every time out you give me, you'll give me 15 dollars for therapy when i get older."

String.prototype.toJadenCase = function () {
  let result = ""
  for(let i = 0; i<this.length; i++) {
    if(i === 0) { 
      result += this[i].toUpperCase() 
      i++
    }

    if (this[i] === " ") {
      result += this[i]
      result += this[i+1].toUpperCase()
      i++
    } else {
      result += this[i]
    }
  }
  return result
}

String.prototype.toJadenCase = function () {
  return this.replace(
    /(^|\s)[a-z]/g, 
    function(x){ return x.toUpperCase() }
  )
}

console.log(input.toJadenCase())

