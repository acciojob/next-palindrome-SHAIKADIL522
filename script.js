function nextPalindrome(num) {
  let n = parseInt(String(num).trim(), 10);
  if (isNaN(n) || n < 1) return "";
  n++;
  while (true) {
    const s = String(n);
    if (s === s.split("").reverse().join("")) return n;
    n++;
  }
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));