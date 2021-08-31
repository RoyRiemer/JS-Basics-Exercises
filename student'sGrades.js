const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// your code goes here
let lowest=Math.min.apply(null,grades);
let highest=Math.max.apply(null,grades);
let range=highest-lowest;
console.log(range);
let gradesNew=grades.sort(function(a,b){return a-b})
console.log(gradesNew[4]);