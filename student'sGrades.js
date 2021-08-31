const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
// your code goes here
let lowest=Math.min.apply(null,grades);
let highest=Math.max.apply(null,grades);
let range=highest-lowest;
console.log(range);
let gradesSlice=grades.slice(5)
let gradesNew=grades.sort(function(a,b){return a-b})
console.log(gradesNew[4]);
let lowestSlice=Math.min.apply(null,gradesSlice);
let highestSlice=Math.max.apply(null,gradesSlice);
let rangeSlice=highestSlice-lowestSlice;
console.log(rangeSlice);