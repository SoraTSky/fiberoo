function fib(){
  let a = 0;
  let b = 1;
  let total = 0;
  let totalArr = [];
  for(let i = 0; i < 50; i++){
    totalArr.push(total);
    total = a + b;
    b = a;
    a = total;
  }
  return totalArr;
}

console.log(fib());

function numsToStrings(array){
  return _.map(array, function(num) { return `${num}`});
}

console.log(numsToStrings(fib()));

function numEvenNumbs(array){
  return _.filter(array, function(num) { return num % 2 == 0});
}


console.log(numEvenNumbs(fib()));