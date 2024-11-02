// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  const vowels = "aeiouAEIOU"; 
  let result = ""; 

  for (let i = 0; i < str.length; i++) { // Додані фігурні дужки
    if (vowels.includes(str[i])) { 
      result += "*"; 
    } else {
      result += str[i]; 
    }
  }

  return result; 
}

console.log(replaceVowels("hello")); 
console.log(replaceVowels("javascript"));  
console.log(replaceVowels("aeiou"));
console.log(replaceVowels(""));
console.log(replaceVowels("bcdfgh"));
console.log(replaceVowels("HELLO"));
console.log(replaceVowels("JavaScript"));

module.exports = replaceVowels;