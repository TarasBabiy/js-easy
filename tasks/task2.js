// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseStringWithoutDigits(str) {
	let filteredStr = '';
	for (let i = 0; i < str.length; i++) {
	  if (isNaN(str[i]) || str[i] === ' ') {
		filteredStr += str[i];
	  }
	}
	let reversedStr = '';
	for (let i = filteredStr.length - 1; i >= 0; i--) {
	  reversedStr += filteredStr[i];
	}
	return reversedStr;
  }
  let input = "abc123def456";
  let result = reverseStringWithoutDigits(input);
  console.log(result);
  
  console.log(reverseStringWithoutDigits("hello5world"));
  console.log(reverseStringWithoutDigits("abc123xyz"));
  console.log(reverseStringWithoutDigits("123"));
  console.log(reverseStringWithoutDigits(""));
  console.log(reverseStringWithoutDigits("abcdef"));
  console.log(reverseStringWithoutDigits("hello"));
  console.log(reverseStringWithoutDigits("1234567890"));
  
  module.exports = reverseStringWithoutDigits;