// reverse 'word' used as argument
function reverse(word) {
  return word.split("").reverse().join("");
}

// compare 'word' to reverse and return boolean of true or false
function isPalindrome(word) {
  const reverseWord = reverse(word);
  return word === reverseWord;
}

/* 
pass 'word' as a callback function argument
declare a variable for the original 'word' and change it to lowercase
declare variable that is the reverse of 'word'
check if reverse string is equal to original string
If true console.log true, if not console.log false
*/

/*
I took the longest single word palindrome - In English - that I could find, changed it to lowercase, declared it as a variable, declared a variable that was it's reverse, then checked if they were equal, making the function isPalindrome() output a Boolean of 'true' or false' when invoked. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("tattarrattat"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("tattarrettate"));

  // console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
