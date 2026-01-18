// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
   let evenOrOdd = number
   if (evenOrOdd % 2 === 0) {
      evenOrOdd = true
   } else {
      evenOrOdd = false
   }
   return evenOrOdd
}

let result = isEven(2)
console.log(result);
