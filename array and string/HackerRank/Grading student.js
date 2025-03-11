// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
  let result = [];
  for (let i = 0; i < grades.length; i++) {
    let multipleOf5 = Math.ceil(grades[i] / 5) * 5;
    if (grades[i] < 38) {
      result.push(grades[i]);
    } else if (multipleOf5 - grades[i] < 3) {
      result.push(multipleOf5);
    } else {
      result.push(grades[i]);
    }
  }
  return result;
}
