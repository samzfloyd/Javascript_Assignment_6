let numbers = [10, 20, 50, 10, 2, 90, 40, 45, 999, 678];
let max = 1;

function greatestNumber(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > max) {
        max = numbers[j];
      }
    }
    if (i == num) {
      console.log(max);
    } else {
      numbers.splice(numbers.indexOf(max), 1);
      max = 1;
    }
  }
}

greatestNumber(1);
