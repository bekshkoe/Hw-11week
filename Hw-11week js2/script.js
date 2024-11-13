let studentCount = parseInt(prompt("Студенттер санын енгізіңіз:"));
let grades = [];
for (let i = 1; i <= studentCount; i++) {
    let grade = parseFloat(prompt(i + "-студенттің бағасын енгізіңіз:"));
    grades.push(grade);
}
let sum = grades.reduce((total, grade) => total + grade, 0);
let average = sum / studentCount;``
alert("Студенттердің бағаларының орташа мәні: " + average.toFixed(2));