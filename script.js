function nextPalindrome(num) {
  //your JS code here
	  num = Number(num);
  let n = num + 1;
  while (true) {
    const s = String(n);
    if (s === s.split("").reverse().join("")) {
      return n;
    }
    n++;
  }
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
