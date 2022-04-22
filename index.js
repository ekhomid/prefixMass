/*
Рассмотрим функцию, которая принимает на вход массив целых чисел. Она находит префикс с максимальной суммой и возвращает одно число — сумму чисел этого префикса.
*/

var mass_test = [2, -1, 3, 6, 4, -1, 2];

function sumElemPrefix(mass){
  for (var i = 1 ; i < mass.length ; i++) {
    mass[i] = mass[i-1] + mass[i];
  }
  var max_sum = 0;
  for (var j = 0 ; j < mass.length ; j++) {
    if (max_sum < mass[j]) {
      max_sum = mass[j];
    }
  }
  return max_sum;
}

console.log(sumElemPrefix(mass_test));