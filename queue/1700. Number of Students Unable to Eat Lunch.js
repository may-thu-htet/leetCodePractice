/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let rest = students.length;
  let fav = new Map();
  for (let st of students) {
    fav.set(st, (fav.get(st) || 0) + 1);
  }

  for (let s of sandwiches) {
    if (fav.get(s) > 0) {
      rest--;
      fav.set(s, fav.get(s) - 1);
    } else {
      break;
    }
  }
  return rest;
};
