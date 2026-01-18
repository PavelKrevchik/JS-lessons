// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
   let more 
   if (number1 > number2 && number1 > number3) {
      more = number1
   } else if (number2 > number1 && number3 < number2) {
      more = number2
   } else {
      more = number3
   }
   return more
}

let itog = findLargest(4, 5, 6)
console.log(itog);
