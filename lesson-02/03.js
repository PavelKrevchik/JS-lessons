/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// const score = 70 не соглашусь с const так как число от 0 до 100 может быть любым // тестовое значение, можно изменять

let score = Math.floor(Math.random() * 100)
let grade
// your code
console.log(score);

if (score >= 0 && score <=49) {
   grade = score 
   console.log(grade, "F");
} else if (score >= 50 && score <=69) {
   grade = score 
   console.log(grade, "D");
} else if (score >= 70 && score <=79) {
   grade = score 
   console.log(grade, "C");
} else if (score >= 80 && score <=89) {
   grade = score 
   console.log(grade, "B");
} else {
   grade = score 
   console.log(grade, "A");
}

