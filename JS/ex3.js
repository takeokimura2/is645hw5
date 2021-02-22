const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];

const filter = (studentList, func) => studentList.filter(func);
const lastNameStartingC = student => student.lastName.startsWith("C");

cLastNameResults = filter(studentList, lastNameStartingC).map(student => {
  return {
    firstName: student.firstName,
    lastName: student.lastName,
    minScore: Math.min.apply(Math, student.scores),
    maxScore: Math.max.apply(Math, student.scores),
    avgScore: student.scores.reduce((tot, number) => tot + number, 0) / student.scores.length,
  }
});

console.log(cLastNameResults);
