

function reverseNumber(num: number): number {
   let reversed: number = 0;
   let n = Math.abs(num);

   while (n > 0) {
      const digit = n % 10;
      reversed = reversed * 10 + digit;
      n = Math.floor(n / 10);
   }

   if (num < 0) {
      return -reversed;
   } else {
      return reversed;
   }
}

console.log(reverseNumber(-123));
